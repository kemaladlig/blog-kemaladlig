---
description: Deploying the Next.js Portfolio to Vercel
---

# Deploying to Vercel

Since you chose **Vercel**, the process is extremely streamlined because Vercel is the creator of Next.js.

## Prerequisites
1.  Ensure your code is pushed to a GitHub repository.
2.  Have a [Vercel Account](https://vercel.com/signup) (Sign up with GitHub).

## Step-by-Step Guide

### 1. Push Code to GitHub
If you haven't already, push your latest changes to GitHub:
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Connect to Vercel
1.  Go to **[Vercel Dashboard](https://vercel.com/dashboard)**.
2.  Click **"Add New..."** button -> **"Project"**.
3.  Select **"Import"** next to your `blog-kemaladlig` repository.

### 3. Configure Project
Vercel will auto-detect that this is a Next.js project.
-   **Framework Preset:** Next.js (Default)
-   **Root Directory:** `./` (Default)
-   **Build Command:** `next build` (Default)
-   **Environment Variables:** _(Leave empty for now unless you have API keys)_

### 4. Deploy
-   Click **"Deploy"**.
-   Wait about 1-2 minutes.
-   🎉 You will get a live URL like: `https://blog-kemaladlig.vercel.app`.

## Domain Setup (Optional)
If you buy a domain (e.g., `kemaladlig.com`):
1.  Go to your Project Dashboard on Vercel.
2.  Navigate to **Settings** -> **Domains**.
3.  Enter `kemaladlig.com` and click **Add**.
4.  Vercel will give you `DNS Nameservers` to enter where you bought your domain (GoDaddy, etc.).

## Automatic Updates
From now on, whenever you run `git push`, Vercel will **automatically** rebuild and update your live site!
