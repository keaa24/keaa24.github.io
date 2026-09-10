# VoxCall Landing Page

A lightweight static landing page for **VoxCall — Flutter WebRTC Voice & Video Calling Starter Kit**.

## Publish with GitHub Pages

1. Create a new public GitHub repository, for example:
   `voxcall-landing`
2. Upload all files from this package to the repository root.
3. Open the repository on GitHub.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**
6. Click **Save**.
7. After GitHub deploys the site, your URL will usually be:
   `https://YOUR_GITHUB_USERNAME.github.io/voxcall-landing/`

You can use that URL in Lemon Squeezy's **Website URL** field.

## When your Lemon Squeezy product is live

In `index.html`, search for:

`Coming Soon`

Replace that link with your Lemon Squeezy checkout or product URL, for example:

```html
<a class="btn" href="YOUR_LEMON_SQUEEZY_URL">Get VoxCall</a>
```

Also remove `btn-disabled`, `aria-disabled`, and `onclick="return false;"` from that button.

## Files

- `index.html` — landing page
- `styles.css` — responsive styling
- `script.js` — small UI behavior
- `privacy.html` — basic privacy page
- `terms.html` — basic terms page
- `assets/favicon.svg` — site icon

No build process or dependencies are required.
