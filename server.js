// server.js — Express wrapper for Render deployment

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join }  from 'path';
import generateHandler     from './api/generate.js';
import healthHandler       from './api/health.js';
import postsHandler        from './api/posts.js';

const app  = express();
const PORT = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Ping — keeps Render alive, responds in <1s ─────────────────────────────
app.get('/api/ping', (_, res) => {
  res.json({ ok: true, alive: true, ts: Date.now() });
});

// ── Generate (GET = cron, POST = dashboard manual trigger) ─────────────────
// Cron-job.org has a 30s response timeout — we reply 202 immediately
// and run the actual generation in the background (works because Render
// is a persistent process, not serverless).

function makeBgRes() {
  // Dummy res object for background runs — logs instead of responding
  const obj = {
    _code: 200,
    status(code) { obj._code = code; return obj; },
    json(data)   { console.log(`[BG Generate] ${obj._code}`, JSON.stringify(data).slice(0, 300)); return obj; },
    setHeader()  { return obj; },
    end()        { return obj; },
  };
  return obj;
}

app.get('/api/generate', (req, res) => {
  // Reply to cron immediately so it doesn't timeout
  res.status(202).json({ ok: true, message: 'Generation started in background' });
  // Run in background — results appear in Render logs
  generateHandler(req, makeBgRes()).catch(e =>
    console.error('[Cron] Generate failed:', e.message)
  );
});

app.post('/api/generate', (req, res) => generateHandler(req, res));

// ── Other API routes ───────────────────────────────────────────────────────
app.all('/api/health', (req, res) => healthHandler(req, res));
app.all('/api/posts',  (req, res) => postsHandler(req, res));

// ── Dashboard static files ─────────────────────────────────────────────────
app.use(express.static(join(__dirname, 'dashboard')));
app.get('*', (_, res) => res.sendFile(join(__dirname, 'dashboard', 'index.html')));

app.listen(PORT, () => console.log(`Bot running on port ${PORT}`));
