#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────────────────────
# Sorted Factory Reset
# Restores all content/ files to the original handoff state recorded in
# HANDOFF_SHA below. Run this from the repo root.
#
# Usage:
#   bash scripts/reset.sh           # dry run — shows what would change
#   bash scripts/reset.sh --execute  # performs the reset and commits
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

HANDOFF_SHA="da8cdc3"
HANDOFF_DATE="2026-05-26"
CLIENT="Savannah Villegas"
DRY_RUN=true

if [[ "${1:-}" == "--execute" ]]; then
  DRY_RUN=false
fi

echo ""
echo "┌─────────────────────────────────────────┐"
echo "│  Sorted Factory Reset                   │"
echo "│  Client : ${CLIENT}              │"
echo "│  Handoff: ${HANDOFF_DATE}                    │"
echo "│  SHA    : ${HANDOFF_SHA}                      │"
echo "└─────────────────────────────────────────┘"
echo ""

# Show what would be restored
echo "Files that will be restored to handoff state:"
git diff --name-only "${HANDOFF_SHA}" HEAD -- content/ | sed 's/^/  → /'
echo ""

if [ "$DRY_RUN" = true ]; then
  echo "▸ DRY RUN — no changes made."
  echo "  Run with --execute to perform the reset:"
  echo "  bash scripts/reset.sh --execute"
  echo ""
  exit 0
fi

# Confirm before destructive action
read -p "⚠  This will overwrite all content/ changes since handoff. Type YES to confirm: " CONFIRM
if [[ "$CONFIRM" != "YES" ]]; then
  echo "Aborted."
  exit 1
fi

echo ""
echo "Restoring content/ to ${HANDOFF_SHA}..."
git checkout "${HANDOFF_SHA}" -- content/

echo "Committing restore..."
git add content/
git commit -m "chore: factory reset — restore content to handoff state (${HANDOFF_SHA})"

echo ""
echo "✓ Reset complete. Push to deploy:"
echo "  git push origin main"
echo ""
