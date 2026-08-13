// ═══════════════════════════════════════════════════════
// config.js — Fill YOUR details below, then push to GitHub
// ═══════════════════════════════════════════════════════

const config = {

  // ── 1. WordPress ─────────────────────────────────────
  wpUrl:         'https://isekaiblogging.gt.tc',
  wpUsername:    'rahat696969',
  wpAppPassword: 'Pc1P HLN3 jfIy FnWk ptZb 2d0Q',

  // ── 2. AI Keys ───────────────────────────────────────
  // Get Groq key free: console.groq.com → API Keys
  groqKey:   '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',
  // Get Gemini key free: aistudio.google.com → Get API Key (starts with AIza...)
  geminiKey: 'YOUR_GEMINI_KEY',

  // ── 3. Blog + Streaming site ─────────────────────────
  blogName: 'AnimeReza',
  siteUrl:  'https://animereza.xyz', // CTAs link HERE (your streaming site)

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
