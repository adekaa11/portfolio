#!/usr/bin/env bash
# Creates github.com/adekaa11/portfolio, pushes this project and deploys it to Vercel (production).
# Run from the project folder:  bash deploy.sh
set -euo pipefail

GH_USER="adekaa11"
REPO="portfolio"
VISIBILITY="--public"   # change to --private if you want

say()  { printf "\n\033[1;36m▸ %s\033[0m\n" "$*"; }
fail() { printf "\n\033[1;31m✗ %s\033[0m\n" "$*" >&2; exit 1; }

# ── 1. Tools ──────────────────────────────────────────────
say "Checking tools"
command -v node >/dev/null || fail "Node.js not found. Install Node 18+ from https://nodejs.org"
command -v git  >/dev/null || fail "git not found. Install from https://git-scm.com"
command -v gh   >/dev/null || fail "GitHub CLI not found. Install from https://cli.github.com, then rerun."
NODE_MAJOR=$(node -p 'process.versions.node.split(".")[0]')
[ "$NODE_MAJOR" -ge 18 ] || fail "Node $NODE_MAJOR is too old, need 18+."
if ! command -v vercel >/dev/null; then
  say "Installing Vercel CLI"
  npm install -g vercel
fi

# ── 2. Logins ─────────────────────────────────────────────
say "GitHub login"
gh auth status >/dev/null 2>&1 || gh auth login --web --git-protocol https
CURRENT_GH=$(gh api user --jq .login)
[ "$CURRENT_GH" = "$GH_USER" ] || fail "gh is logged in as '$CURRENT_GH', expected '$GH_USER'. Run: gh auth login"

say "Vercel login"
vercel whoami >/dev/null 2>&1 || vercel login

# ── 3. Install & build locally (catches errors before deploy) ──
say "Installing dependencies"
npm install
say "Building"
npm run build

# ── 4. Git + GitHub repo ──────────────────────────────────
say "Preparing git repository"
if [ ! -d .git ]; then
  git init -b main
fi
git add -A
if ! git diff --cached --quiet; then
  git commit -m "Portfolio: Next.js 14 + Tailwind + Framer Motion"
fi

if gh repo view "$GH_USER/$REPO" >/dev/null 2>&1; then
  say "Repo $GH_USER/$REPO already exists, pushing to it"
  git remote get-url origin >/dev/null 2>&1 || git remote add origin "https://github.com/$GH_USER/$REPO.git"
  git push -u origin main
else
  say "Creating $GH_USER/$REPO on GitHub"
  gh repo create "$GH_USER/$REPO" $VISIBILITY \
    --description "Personal portfolio · CS & AI Engineering" \
    --source=. --remote=origin --push
fi

# ── 5. Vercel ─────────────────────────────────────────────
say "Linking Vercel project"
vercel link --yes --project "$REPO"

say "Connecting GitHub repo (auto-deploy on every push)"
vercel git connect "https://github.com/$GH_USER/$REPO" --yes \
  || echo "  (skip) Connect it later in Vercel → Project → Settings → Git"

say "Deploying to production"
URL=$(vercel deploy --prod --yes)

printf "\n\033[1;32m✓ Done\033[0m\n"
echo "  GitHub: https://github.com/$GH_USER/$REPO"
echo "  Live:   $URL"
echo "  Next time: just 'git push' and Vercel redeploys automatically."
