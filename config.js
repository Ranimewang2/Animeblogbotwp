// ═══════════════════════════════════════════════════════
// config.js — Fill YOUR details below, then push to GitHub
// ═══════════════════════════════════════════════════════

const config = {

  // ── 1. WordPress ─────────────────────────────────────
  wpUrl:         'https://YOURSITE.com',
  wpUsername:    'YOUR_WP_USERNAME',
  wpAppPassword: 'xxxx xxxx xxxx xxxx',

  // ── 2. AI Keys ───────────────────────────────────────
  // Get Groq key free: console.groq.com → API Keys
  groqKey:   'YOUR_GROQ_KEY',
  // Get Gemini key free: aistudio.google.com → Get API Key (starts with AIza...)
  geminiKey: 'YOUR_GEMINI_KEY',

  // ── 3. Blog + Streaming site ─────────────────────────
  blogName: 'AnimeReza',
  siteUrl:  'https://YOUR_STREAMING_SITE.com', // CTAs link HERE (your streaming site)

  // ── 4. WordPress category IDs ────────────────────────
  // WP Admin → Posts → Categories → hover category → check URL for tag_ID
  categoryReview: 1,
  categoryList:   2,
  categoryNews:   3,

  // ── 5. Bot settings ───────────────────────────────────
  articlesPerRun: 1,
  scheduleGapHrs: 4,

};

export default config;
