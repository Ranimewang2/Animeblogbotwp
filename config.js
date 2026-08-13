// ═══════════════════════════════════════════════════════
// config.js — Fill YOUR details below, then push to GitHub
// ═══════════════════════════════════════════════════════

const config = {

  // ── 1. WordPress (your InfinityFree site) ────────────
  wpUrl:         'https://YOURSITE.com',      // ← change this
  wpUsername:    'YOUR_WP_USERNAME',           // ← change this
  wpAppPassword: 'xxxx xxxx xxxx xxxx',        // ← WP Application Password

  // ── 2. OpenRouter (openrouter.ai → Keys) ─────────────
  openrouterKey: 'sk-or-xxxxxxxxxxxxxxxxxxxx', // ← change this

  // ── 3. Blog info ──────────────────────────────────────
  blogName:      'AnimeReza',
  siteUrl:       'https://YOURSITE.com',       // same as wpUrl

  // ── 4. WordPress category IDs ─────────────────────────
  // Find them: WP Admin → Posts → Categories → hover the category → check URL for tag_ID
  categoryReview: 1,
  categoryList:   2,
  categoryNews:   3,

  // ── 5. Generation settings ────────────────────────────
  articlesPerRun: 2,      // articles per cron trigger
  scheduleGapHrs: 4,      // hours between scheduled posts

};

export default config;
