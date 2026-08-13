// ═══════════════════════════════════════════════════════
// config.js — Fill YOUR details below, then push to GitHub
// ═══════════════════════════════════════════════════════

const config = {

  // ── 1. WordPress (your InfinityFree site) ────────────
  wpUrl:         'https://isekaiblogging.gt.tc',      // ← change this
  wpUsername:    'rahatxashito',           // ← change this
  wpAppPassword: 'ashito6969',        // ← WP Application Password

  // ── 2. OpenRouter (openrouter.ai → Keys) ─────────────
  openrouterKey: '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', // ← change this

  // ── 3. Blog info ──────────────────────────────────────
  blogName:      'isekai blogging',
  siteUrl:       'https://animereza.xyz',       // same as wpUrl

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
