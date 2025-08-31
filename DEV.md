
## 🚀 Deployment (GitHub Pages)

This site is configured to auto-deploy to GitHub Pages (user site) at: <https://tharindushakya.github.io>

### 1. Repository Naming

For a user/organization site the repository MUST be named exactly:

```text
tharindushakya.github.io
```

If this project is currently in a repo with another name, rename it or create a new repo with that exact name and push the code there.

### 2. Workflow

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds the project and publishes `dist/` to Pages on every push to `main`.

### 3. Settings

In the GitHub repository:

1. Go to Settings → Pages
2. Ensure Source is set to "GitHub Actions"

### 4. Custom Domain (Optional)

If you later add a custom domain, create a `CNAME` file in `public/` with your domain and add DNS A / AAAA / CNAME records per GitHub Pages docs.

### 5. Local Build Test

Before pushing:

```bash
npm ci
npm run build
```

Confirm the `dist/` folder loads correctly via a static server if desired.

### 6. Cache Busting

Vite includes content hashes in filenames, so updates propagate without manual cache clearing.

### 7. Troubleshooting

| Symptom | Fix |
|--------|-----|
| 404 on load | Repo not named correctly or Pages not enabled. |
| Old content | Hard refresh (Ctrl+F5) – check workflow run succeeded. |
| Blank page | Make sure `base` in `vite.config.ts` is `'/'` for user site. |

Deployment is otherwise hands‑off—just push to `main`.
