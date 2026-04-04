# Levana Technology - Website Personal Branding

Production-ready company profile website built with Next.js 14, TypeScript, Tailwind CSS, and Decap CMS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS (Git-based)
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image Component

## 📁 Project Structure

```
levana-technology/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── sitemap.ts               # Dynamic sitemap
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/                # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PackagesSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── CTASection.tsx
│   │   └── WhatsAppForm.tsx
│   └── ui/                      # Reusable UI components
├── content/                     # CMS content (JSON)
│   ├── about/
│   ├── team/
│   ├── settings/
│   ├── testimonials/
│   ├── packages/
│   └── services/
├── lib/                         # Utilities
│   ├── content.ts              # Content parser
│   └── utils.ts                # Helper functions
├── types/                       # TypeScript types
│   └── index.ts
├── styles/
│   └── globals.css             # Global styles
└── public/
    ├── admin/                   # Decap CMS admin
    │   ├── config.yml
    │   └── index.html
    ├── uploads/                 # Media uploads
    └── robots.txt

```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd levana-technology
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open browser**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## 📝 Content Management with Decap CMS

### Setup Decap CMS

1. **Enable Git Gateway** (for GitHub OAuth)
   - Go to your repository settings on GitHub
   - Enable GitHub Pages (select any branch)
   - This activates the OAuth flow

2. **Access Admin Panel**
   - Development: `http://localhost:3000/admin`
   - Production: `https://yourdomain.com/admin`

3. **Configure OAuth (GitHub)**

   Create a GitHub OAuth App:
   - Go to: GitHub Settings → Developer Settings → OAuth Apps
   - Click "New OAuth App"
   - Fill in:
     - **Application name**: Levana Technology CMS
     - **Homepage URL**: `https://yourdomain.com`
     - **Authorization callback URL**: `https://api.netlify.com/auth/done`
   - Copy Client ID and Client Secret

4. **Setup Netlify Identity** (Alternative)
   
   If using Netlify:
   - Enable Netlify Identity in your Netlify dashboard
   - Enable Git Gateway
   - Invite users via email

### Content Structure

All content is stored in `/content` folder as JSON files:

- **Settings**: `/content/settings/general.json`
- **About**: `/content/about/index.json`
- **Services**: `/content/services/services.json`
- **Packages**: `/content/packages/packages.json`
- **Team**: `/content/team/*.json`
- **Testimonials**: `/content/testimonials/testimonials.json`
- **FAQ**: `/content/settings/faq.json`

### Adding New Content

1. Access `/admin` panel
2. Login with GitHub or Netlify Identity
3. Choose collection (Settings, Team, etc.)
4. Add or edit content
5. Save & Publish

## 🎨 Customization

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#1E6FD9",    // Main blue
    dark: "#1558B8",       // Darker blue
    light: "#3B82F6",      // Lighter blue
  },
}
```

### WhatsApp Integration

The form redirects to WhatsApp with pre-filled message:

```typescript
// lib/utils.ts
export function formatWhatsAppMessage(data: WhatsAppFormData): string {
  // Customize message format here
}
```

Update WhatsApp number in `/content/settings/general.json`:
```json
{
  "whatsappNumber": "6287007449733"
}
```

### Navigation Links

Edit navigation in `components/layout/Navbar.tsx`:

```typescript
const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  // Add more links
];
```

## 📱 Responsive Design

Website is fully responsive:
- **Desktop**: 1024px+ (Grid layouts)
- **Tablet**: 768px - 1023px (Adjusted grids)
- **Mobile**: < 768px (Stacked layouts, hamburger menu)

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - None required for this setup
   - All content is file-based

### Custom Domain

1. Go to Vercel project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records as instructed
5. Update `robots.txt` and `sitemap.ts` with your domain

## 🔍 SEO Configuration

### Metadata

Each page has metadata in `app/*/page.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keyword1, keyword2',
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
  },
};
```

### Sitemap

Auto-generated at `/sitemap.xml`

Update base URL in `app/sitemap.ts`:
```typescript
const baseUrl = 'https://yourdomain.com';
```

### Robots.txt

Located at `/public/robots.txt`

Update sitemap URL:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

## 📊 Performance Optimization

- ✅ Next.js Image optimization
- ✅ Static generation (SSG)
- ✅ Font optimization (Google Fonts)
- ✅ Lazy loading sections
- ✅ Minified CSS/JS
- ✅ Server Components by default

## 🧪 TypeScript

Strict mode enabled. No `any` types used.

Run type checking:
```bash
npm run type-check
```

## 🎯 Features

- ✅ Sticky navigation with mobile hamburger menu
- ✅ WhatsApp form integration
- ✅ Team member profiles
- ✅ Package pricing cards
- ✅ Testimonials carousel
- ✅ FAQ accordion
- ✅ CTA sections
- ✅ Social media links
- ✅ Responsive design
- ✅ SEO optimized
- ✅ CMS for content management

## 📞 WhatsApp Form

The form at `#contact` section:
- Validates input fields
- Formats message
- Redirects to WhatsApp with pre-filled text
- Mobile-friendly

## 🔐 Security

- No backend server required
- No database
- Git-based content management
- Static site generation
- No API keys in client-side code

## 📄 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🐛 Troubleshooting

### CMS Not Loading
- Check `/public/admin/config.yml` syntax
- Verify GitHub OAuth configuration
- Check browser console for errors

### Images Not Loading
- Ensure images are in `/public/uploads`
- Check image paths in content JSON
- Verify Next.js Image configuration

### Build Errors
- Run `npm run type-check`
- Check all imports
- Verify content JSON format

## 📚 Documentation Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Decap CMS](https://decapcms.org/docs/)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 🤝 Support

For support, email: info@levanatechnology.com

## 📝 License

Private project for Levana Technology.

---

Built with ❤️ by Levana Technology
