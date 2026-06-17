#!/usr/bin/env bash
#
# Redeploy the Rebyte CRM (worker `rebyte-emails`) to Cloudflare Workers + D1.
#
# One shot, idempotent, no agent required:
#   ./deploy.sh
#
# It builds the OpenNext bundle from the CURRENT working tree and deploys it to
# the existing worker behind https://crm.impo.ai. It does NOT touch the D1 data,
# the worker secrets, or the Cloudflare Access config — code/UI only. Re-run it
# any time after editing a campaign template or other app code.
#
# Requires ~/cloudflare.env with CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID.
set -euo pipefail

CRM_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$CRM_DIR"

step() { printf '\n\033[1;36m▶ %s\033[0m\n' "$1"; }
die()  { printf '\033[1;31m✘ %s\033[0m\n' "$1" >&2; exit 1; }

# --- node/pnpm on PATH (works from non-login / launchd / cron shells too) ---
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  # shellcheck disable=SC1091
  . "$HOME/.nvm/nvm.sh"
  nvm use 22.20.0 >/dev/null 2>&1 || true
fi
command -v pnpm >/dev/null 2>&1 || die "pnpm not found on PATH"

# --- Cloudflare credentials ---
[ -f "$HOME/cloudflare.env" ] && { set -a; . "$HOME/cloudflare.env"; set +a; }
: "${CLOUDFLARE_API_TOKEN:?Set CLOUDFLARE_API_TOKEN (or create ~/cloudflare.env)}"
: "${CLOUDFLARE_ACCOUNT_ID:?Set CLOUDFLARE_ACCOUNT_ID (or create ~/cloudflare.env)}"

step "Installing dependencies (pnpm install)"
pnpm install

step "Building + deploying to Cloudflare (rebyte-emails)"
pnpm exec opennextjs-cloudflare build
deploy_out="$(pnpm exec opennextjs-cloudflare deploy 2>&1)"
echo "$deploy_out"
echo "$deploy_out" | grep -qiE "Current Version ID|Deployed" || die "deploy did not report success"

step "Smoke-testing https://crm.impo.ai"
code="$(curl -s -m 20 -o /dev/null -w '%{http_code}' https://crm.impo.ai/ || true)"
# 302 -> served and correctly gated by Cloudflare Access; 200 -> open (shouldn't happen)
case "$code" in
  302) printf '\033[1;32m✅ Deploy complete — crm.impo.ai live and Access-gated (HTTP 302).\033[0m\n' ;;
  200) printf '\033[1;33m⚠️  Live (HTTP 200) but NOT showing the Access gate — check Cloudflare Access.\033[0m\n' ;;
  *)   die "crm.impo.ai returned HTTP $code (expected 302). Worker deployed; check the dashboard." ;;
esac
