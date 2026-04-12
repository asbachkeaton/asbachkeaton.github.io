# Portfolio

Website meant to be hosted on github pages

## File Structure
- `index.html`: single-page portfolio with sections (Home, About, Senior project, Resume, Contact)
- `project/index.html`: Senior Project page w/ more detail if thats what we wanna highlight
- `styles.css`: styling
- `main.js`: simple js for nav, contact form
- `assets/docs/`: PDFs of resume + project go here

## Add nass content
### 1) Replace placeholders in `index.html` and `project/index.html`
Search for and replace:
- Tagline text under the main heading
- `you@example.com`
- Disabled `LinkedIn` / `GitHub` links (replace `href="#"` with real URLs and remove `aria-disabled` / `is-disabled`)

### 2) Add PDFs
Put these files in `assets/docs/` (exact filenames recommended):
- `assets/docs/senior-project.pdf`
- `assets/docs/resume.pdf`

If you want different filenames, update the links in:
- `index.html` (project/resume links + embedded PDF objects)
- `project/index.html` (PDF link + embed)

## Local preview
From this folder, run:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.

(Optionally if you have the live server plugin, you can right click on the html file and click "Open in live server")

## Deploy to GitHub Pages (THIS IS WHAT U WANNA DO BC ITS FREE)
### Option A: Pages from `main` (root)
1. Create a GitHub repo and push this folder to it.
2. On GitHub: **Settings → Pages**
3. **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main`
   - Folder: `/ (root)`
4. Save. After it builds, GitHub will show your site URL.

### Custom domain (optional) (IF U WANNA GET A DOMAIN)
If using a custom domain, create a `CNAME` file in the repo root containing your domain, e.g.:

```txt
www.example.com
```

