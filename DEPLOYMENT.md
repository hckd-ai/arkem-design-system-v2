# GitHub Pages Deployment Guide

This document explains how the ARKEM Design System Storybook is deployed to GitHub Pages.

## Automated Deployment

The Storybook is automatically deployed to GitHub Pages using GitHub Actions whenever code is pushed to the `main` or `master` branch.

### Workflow

The deployment workflow (`.github/workflows/deploy-storybook.yml`) performs these steps:

1. **Checkout** the repository
2. **Setup Node.js** (version 20)
3. **Install dependencies** using `npm ci`
4. **Build Storybook** with `npm run build-storybook`
5. **Deploy** to GitHub Pages

### URL

Once deployed, the Storybook will be available at:
```
https://marcohckd.github.io/arkem-design-system/
```

## Manual Deployment

If you need to deploy manually, you can use:

```bash
npm run deploy-storybook
```

This builds the Storybook and deploys it using `gh-pages`.

## Initial Setup

### 1. Enable GitHub Pages

1. Go to your repository settings: `https://github.com/marcohckd/arkem-design-system/settings/pages`
2. Under "Source", select **"GitHub Actions"**
3. Save the changes

### 2. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: ARKEM Design System"
git branch -M main
git remote add origin https://github.com/marcohckd/arkem-design-system.git
git push -u origin main
```

### 3. Verify Deployment

After pushing to the `main` branch:
- The GitHub Actions workflow will run automatically
- Check the "Actions" tab in your repository to monitor the deployment
- Once complete, the Storybook will be available at the URL above

## Configuration Files

- **`.github/workflows/deploy-storybook.yml`** - GitHub Actions workflow
- **`.storybook/main.js`** - Storybook config with base path for GitHub Pages
- **`package.json`** - Contains build and deploy scripts
- **`.gitignore`** - Excludes `storybook-static/` from version control

## Troubleshooting

### Build fails in GitHub Actions

- Check that all dependencies are listed in `package.json`
- Verify Node.js version is compatible (currently set to 20)

### Storybook loads but assets are 404

- Ensure the `GITHUB_PAGES` environment variable is set during build
- Verify the base path in `.storybook/main.js` matches your repository name

### Deployment doesn't trigger

- Verify GitHub Pages is configured to use "GitHub Actions" as the source
- Check that the workflow file is in `.github/workflows/`
- Ensure you're pushing to `main` or `master` branch

