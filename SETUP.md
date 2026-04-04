# 🚀 Quick Setup Guide - Levana Technology

## Step 1: Initial Setup (5 minutes)

### 1.1 Install Dependencies
```bash
cd levana-technology
npm install
```

### 1.2 Start Development Server
```bash
npm run dev
```

Open: `http://localhost:3000`

---

## Step 2: Content Configuration (10 minutes)

### 2.1 Update Company Information

Edit `/content/settings/general.json`:

```json
{
  "whatsappNumber": "YOUR_WHATSAPP_NUMBER",
  "businessEmail": "your@email.com",
  "ctaText": "Mulai Konsultasi",
  "companyName": "LEVANA",
  "companyDescription": "Your description",
  "socialMedia": {
    "instagram": "https://instagram.com/yourhandle",
    "linkedin": "https://linkedin.com/company/yourcompany",
    "facebook": "https://facebook.com/yourpage",
    "github": "https://github.com/yourusername"
  }
}
```

### 2.2 Update About Section

Edit `/content/about/index.json`:

```json
{
  "title": "Your Company Name",
  "description": "Your description",
  "stats": {
    "availability": "24/7",
    "projects": "10+",
    "satisfaction": "98%"
  }
}
```

### 2.3 Update Services

Edit `/content/services/services.json` - Add/edit your services

### 2.4 Update Packages

Edit `/content/packages/packages.json` - Add/edit your pricing packages

### 2.5 Add Team Members

Create files in `/content/team/` for each team member:

```json
{
  "id": "1",
  "name": "John Doe",
  "position": "CEO",
  "photo": "/uploads/john.jpg",
  "description": "Bio here",
  "linkedin": "https://linkedin.com/in/johndoe"
}
```

---

## Step 3: Deploy to Vercel (10 minutes)

### 3.1 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/levana-technology.git
git push -u origin main
```

### 3.2 Import to Vercel

1. Go to [vercel.com](https://vercel.com/new)
2. Click "Import Project"
3. Select your GitHub repository
4. Click "Deploy"

✅ Your site is live!

---

## Step 4: Setup Decap CMS (15 minutes)

### Option A: GitHub OAuth (Recommended)

#### 4.1 Create GitHub OAuth App

1. Go to: https://github.com/settings/developers
2. Click "OAuth Apps" → "New OAuth App"
3. Fill in:
   - **Application name**: Levana Technology CMS
   - **Homepage URL**: `https://your-vercel-domain.vercel.app`
   - **Callback URL**: `https://api.netlify.com/auth/done`
4. Save **Client ID** and **Client Secret**

#### 4.2 Setup Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up / Login
3. Go to: Site Settings → Identity → Enable Identity
4. Settings → Identity → External providers → Add provider (GitHub)
5. Paste your GitHub OAuth Client ID & Secret
6. Enable Git Gateway

#### 4.3 Update config.yml

Edit `/public/admin/config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main
```

#### 4.4 Add Netlify Script

Add to your site (optional for local OAuth):
```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

### Option B: Local Development Only

For local testing without OAuth:

Edit `/public/admin/config.yml`:

```yaml
backend:
  name: test-repo
```

Access CMS: `http://localhost:3000/admin`

---

## Step 5: Custom Domain (Optional, 5 minutes)

### 5.1 Add Domain to Vercel

1. Go to Vercel project → Settings → Domains
2. Add your domain
3. Update DNS records as shown

### 5.2 Update Configuration

Update these files with your domain:

**`app/sitemap.ts`**:
```typescript
const baseUrl = 'https://yourdomain.com';
```

**`public/robots.txt`**:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 🎉 You're Done!

Your website is now:
- ✅ Live on Vercel
- ✅ Content manageable via CMS
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Production ready

---

## Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Type checking
npm run type-check

# Lint code
npm run lint
```

---

## Accessing CMS

**Local**: `http://localhost:3000/admin`
**Production**: `https://yourdomain.com/admin`

Default login: GitHub account (if OAuth configured)

---

## Next Steps

1. Add your content via CMS
2. Upload team photos to `/public/uploads/`
3. Test WhatsApp form
4. Check mobile responsiveness
5. Update SEO metadata
6. Add Google Analytics (optional)

---

## Need Help?

Check:
- Full documentation: `README.md`
- Next.js docs: https://nextjs.org/docs
- Decap CMS docs: https://decapcms.org/docs/

---

## Quick Checklist

- [ ] Dependencies installed
- [ ] Development server running
- [ ] Company info updated
- [ ] Content added
- [ ] GitHub repository created
- [ ] Deployed to Vercel
- [ ] Decap CMS configured
- [ ] Custom domain added (optional)
- [ ] Tested on mobile
- [ ] WhatsApp form working

🎊 Congratulations! Your website is ready!
