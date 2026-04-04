# 🚀 Deployment Guide - Levana Technology

Complete guide for deploying your website to production.

---

## Option 1: Vercel (Recommended)

### Why Vercel?
- ✅ Built for Next.js
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ CDN included
- ✅ Free tier generous
- ✅ Custom domains
- ✅ Instant deployments

### Deployment Steps

#### 1. Prepare Your Code

```bash
# Make sure everything is committed
git add .
git commit -m "Ready for deployment"
git push origin main
```

#### 2. Deploy to Vercel

**Method A: Vercel CLI (Fastest)**

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Method B: Vercel Dashboard**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your Git repository
3. Configure:
   - **Framework**: Next.js (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Click "Deploy"

#### 3. Configure Custom Domain

1. Go to Project Settings → Domains
2. Add your domain: `yourdomain.com`
3. Update DNS records:
   - **Type**: A
   - **Name**: @
   - **Value**: `76.76.21.21`
   
   - **Type**: CNAME
   - **Name**: www
   - **Value**: `cname.vercel-dns.com`

4. Wait for DNS propagation (up to 48 hours)

#### 4. Update Site URLs

After domain is active, update:

**`app/sitemap.ts`**:
```typescript
const baseUrl = 'https://yourdomain.com';
```

**`public/robots.txt`**:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

Commit and push:
```bash
git add .
git commit -m "Update domain"
git push
```

Vercel will auto-deploy!

---

## Option 2: Netlify

### Deployment Steps

#### 1. Create netlify.toml

Create `netlify.toml` in root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

#### 2. Deploy

**Method A: Netlify CLI**

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

**Method B: Netlify Dashboard**

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import existing project"
3. Connect Git provider
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click "Deploy"

#### 3. Enable Identity (for CMS)

1. Site Settings → Identity → Enable Identity
2. Settings → Identity → Registration → Invite only
3. Settings → Identity → External providers → Add GitHub
4. Enable Git Gateway

---

## Option 3: Custom VPS/Server

### Requirements
- Node.js 18+
- PM2 or similar process manager
- Nginx (reverse proxy)
- SSL certificate (Let's Encrypt)

### Deployment Steps

#### 1. Build Application

```bash
npm run build
```

#### 2. Upload to Server

```bash
scp -r .next package.json package-lock.json user@server:/var/www/levana
```

#### 3. Install Dependencies on Server

```bash
ssh user@server
cd /var/www/levana
npm install --production
```

#### 4. Setup PM2

```bash
npm install -g pm2
pm2 start npm --name "levana" -- start
pm2 save
pm2 startup
```

#### 5. Configure Nginx

Create `/etc/nginx/sites-available/levana`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/levana /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 6. Setup SSL

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Post-Deployment Checklist

After deploying, verify:

### Functionality
- [ ] Home page loads
- [ ] All navigation links work
- [ ] Images load correctly
- [ ] WhatsApp form redirects properly
- [ ] Mobile menu works
- [ ] All sections display correctly

### SEO
- [ ] `/sitemap.xml` accessible
- [ ] `/robots.txt` accessible
- [ ] Meta tags present (view source)
- [ ] OpenGraph tags present

### Performance
- [ ] Page load time < 3 seconds
- [ ] Images optimized
- [ ] No console errors
- [ ] Lighthouse score > 90

### CMS
- [ ] `/admin` accessible
- [ ] Can login to CMS
- [ ] Can edit content
- [ ] Changes reflect on site

### Mobile
- [ ] Responsive on phone
- [ ] Hamburger menu works
- [ ] Form is usable
- [ ] No horizontal scroll

---

## Continuous Deployment

Once connected to Git:

1. Make changes locally
2. Commit: `git commit -m "Update content"`
3. Push: `git push origin main`
4. Auto-deploy happens! ✨

---

## Monitoring & Analytics

### Add Google Analytics (Optional)

1. Get GA4 ID from [analytics.google.com](https://analytics.google.com)

2. Create `app/GoogleAnalytics.tsx`:

```typescript
'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
```

3. Add to `app/layout.tsx`:

```typescript
import GoogleAnalytics from './GoogleAnalytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
```

---

## Rollback

If something goes wrong:

### Vercel
1. Go to Deployments
2. Find working version
3. Click "Promote to Production"

### Git-based
```bash
git revert HEAD
git push
```

---

## Environment-Specific Configs

### Production Only Features

Create `app/config.ts`:

```typescript
export const config = {
  isDev: process.env.NODE_ENV === 'development',
  isProd: process.env.NODE_ENV === 'production',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
};
```

---

## Backup Strategy

### Content Backup
- All content in Git → automatic backup
- GitHub/GitLab = cloud backup
- Clone repository regularly

### Image Backup
```bash
# Download uploads folder
scp -r user@server:/var/www/levana/public/uploads ./backup/
```

---

## Security Best Practices

### 1. Update Dependencies
```bash
npm audit
npm update
```

### 2. Secure CMS
- Use strong passwords
- Enable 2FA on GitHub
- Invite-only CMS access

### 3. Monitor
- Setup Vercel/Netlify notifications
- Enable error tracking
- Monitor uptime

---

## Performance Optimization

### Already Implemented
✅ Next.js Image optimization
✅ Static generation
✅ Font optimization
✅ CSS minification
✅ Code splitting

### Additional Tips
- Use WebP images
- Compress images before upload
- Enable Vercel Analytics
- Use Vercel Edge Network

---

## Troubleshooting Deployment

### Build Fails

```bash
# Check locally first
npm run build

# Check TypeScript
npm run type-check

# Check dependencies
npm install
```

### 404 on Routes

Make sure `next.config.mjs` has:
```javascript
const nextConfig = {
  output: 'standalone', // For Docker
  // or
  output: 'export', // For static hosting
};
```

### Images Not Loading

Check:
- Image paths start with `/uploads/`
- Files exist in `/public/uploads/`
- Next.js Image domains configured

---

## Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Decap CMS**: https://decapcms.org/docs/

---

## Quick Commands Reference

```bash
# Local development
npm run dev

# Build for production
npm run build

# Test production build locally
npm start

# Deploy to Vercel
vercel --prod

# Check for errors
npm run lint
npm run type-check
```

---

🎉 Your site is now live and production-ready!
