# For Mauli — Birthday Site

A single-page site: a folded, wax-sealed envelope that unfolds on tap to reveal
Mauli's birthday poster, with a soft falling-petal ambience throughout.

## Files
- `index.html` — page structure
- `style.css` — all styling + animation
- `script.js` — petal ambience + unfold sequencing
- `assets/poster.png` — the poster image

## Preview locally
Just open `index.html` in a browser — no build step needed.

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**
```bash
npm install -g vercel      # if you don't have it
cd mauli-birthday-site
vercel                     # follow the prompts, accept defaults
vercel --prod              # promote to your production URL
```

**Option B — Drag and drop**
1. Go to https://vercel.com/new
2. Drag the whole `mauli-birthday-site` folder onto the page
3. Deploy — no framework/build settings needed, it's a static site

**Option C — GitHub**
1. Push this folder to a new GitHub repo
2. Import the repo at https://vercel.com/new
3. Leave build settings as default (static) and deploy

Once deployed you'll get a `*.vercel.app` link you can send her directly.
