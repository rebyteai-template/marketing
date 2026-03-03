#!/bin/bash
# Weekly sync: pull new Clerk users into the All Users (Master) group.
# Emails are normalized (Gmail +aliases and dots) and deduplicated on insert.
#
# Usage:
#   ./scripts/weekly-sync.sh              # against localhost:4000
#   ./scripts/weekly-sync.sh https://emails.rebyte.ai   # against production
#
# Schedule with cron (every Monday 9am):
#   0 9 * * 1 cd /path/to/emails && ./scripts/weekly-sync.sh

set -euo pipefail

BASE_URL="${1:-http://localhost:4000}"
GROUP_ID=14  # "All Users (Master)"

echo "=== Weekly Sync — $(date) ==="
echo "Target: ${BASE_URL}/api/groups/${GROUP_ID}/sync"

RESPONSE=$(curl -sf -X POST "${BASE_URL}/api/groups/${GROUP_ID}/sync" \
  -H "Content-Type: application/json")

MEMBER_COUNT=$(echo "$RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin)['member_count'])")
SYNCED_AT=$(echo "$RESPONSE" | python3 -c "import sys,json; print(json.load(sys.stdin)['last_synced_at'])")

echo "Done. Members: ${MEMBER_COUNT}, Synced at: ${SYNCED_AT}"
