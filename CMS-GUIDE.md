# 📝 Decap CMS Usage Guide

Complete guide for managing your website content through Decap CMS.

---

## 🔐 Accessing the CMS

### URLs
- **Local**: `http://localhost:3000/admin`
- **Production**: `https://yourdomain.com/admin`

### Login Methods

#### Option 1: GitHub OAuth (Production)
- Click "Login with GitHub"
- Authorize the application
- You'll be redirected to the CMS

#### Option 2: Test Mode (Local Development)
- Set backend to `test-repo` in config
- No authentication required
- Changes only saved locally

---

## 📚 Content Collections

### 1. Settings

#### General Settings
Path: `Settings → General Settings`

**Fields:**
- **Company Name**: Your brand name (shown in navbar/footer)
- **Company Description**: Short tagline
- **WhatsApp Number**: Format: `6287007449733` (country code + number)
- **Business Email**: Contact email
- **CTA Button Text**: Call-to-action text (e.g., "Mulai Konsultasi")
- **Social Media**: Instagram, LinkedIn, Facebook, GitHub URLs

**Example:**
```json
{
  "companyName": "LEVANA",
  "whatsappNumber": "6287007449733",
  "ctaText": "Mulai Konsultasi"
}
```

#### FAQ Settings
Path: `Settings → FAQ Settings`

**How to add FAQ:**
1. Click "Add FAQs"
2. Fill in:
   - **ID**: Unique identifier (e.g., "1", "2", "faq-pricing")
   - **Question**: The question text
   - **Answer**: The answer text
3. Click "Save"

**Tips:**
- Keep questions concise
- Answers can be 1-3 paragraphs
- Order matters (first = top of page)

---

### 2. About

Path: `About → About Page`

**Fields:**
- **Title**: Main heading
- **Description**: Subheading/tagline
- **Image**: Optional hero image
- **Stats**:
  - **Availability**: e.g., "24/7"
  - **Projects**: e.g., "10+"
  - **Satisfaction**: e.g., "98%"

**Example:**
```json
{
  "title": "Levana Technology",
  "description": "Menghadirkan Website yang Merefleksikan Nilai Diri Anda",
  "stats": {
    "availability": "24/7",
    "projects": "50+",
    "satisfaction": "99%"
  }
}
```

---

### 3. Services

Path: `Services → Services List`

**How to add service:**
1. Click "Add Services"
2. Fill in:
   - **ID**: Unique identifier
   - **Icon**: Choose from dropdown (globe, users, compass)
   - **Title**: Service name
   - **Description**: What you offer (1-2 sentences)
3. Click "Save"

**Available Icons:**
- `globe`: Website/global services
- `users`: Team/community services
- `compass`: Navigation/strategy services

**Tip:** Keep to 3-5 services for best layout

---

### 4. Packages

Path: `Packages → Package List`

**How to add package:**
1. Click "Add Packages"
2. Fill in:
   - **ID**: Unique identifier
   - **Name**: Package name
   - **Description**: Short description
   - **Price**: Number only (e.g., 1500000)
   - **Is Popular**: Toggle on for "Popular" badge
   - **Features**: List of features
3. Click "Save"

**Adding Features:**
1. In "Features" section, click "Add Feature"
2. Type feature description
3. Add more features
4. Reorder by dragging

**Pricing Tips:**
- Price in Rupiah (no decimals)
- Mark only 1 package as "Popular"
- List 5-8 features per package
- Order: Basic → Premium

**Example:**
```json
{
  "name": "Personal Branding Starter",
  "price": 1500000,
  "isPopular": true,
  "features": [
    "1 Halaman Website",
    "5 Section Utama",
    "Mobile Responsive",
    "SEO Optimization"
  ]
}
```

---

### 5. Team Members

Path: `Team Members`

**How to add team member:**
1. Click "New Team Members"
2. Fill in:
   - **ID**: Unique identifier
   - **Name**: Full name
   - **Position**: Job title
   - **Photo**: Upload photo (square recommended)
   - **Description**: Short bio (optional)
   - **LinkedIn URL**: LinkedIn profile (optional)
3. Click "Publish"

**Photo Guidelines:**
- Size: 400x400px minimum
- Format: JPG or PNG
- File size: < 500KB
- Square aspect ratio
- Professional headshot

**Tips:**
- Keep bio under 100 words
- Use consistent photo style
- Add LinkedIn for credibility

---

### 6. Testimonials

Path: `Testimonials → Testimonials List`

**How to add testimonial:**
1. Click "Add Testimonials"
2. Fill in:
   - **ID**: Unique identifier
   - **Name**: Client name
   - **Position**: Job title/role
   - **Photo**: Client photo
   - **Rating**: 1-5 stars
   - **Content**: Testimonial text
3. Click "Save"

**Best Practices:**
- Get permission from clients
- Use real photos
- Keep testimonials 2-4 sentences
- Most recent first
- 5-10 testimonials total

**Example:**
```json
{
  "name": "John Doe",
  "position": "Freelance Designer",
  "rating": 5,
  "content": "Suka banget sama hasilnya! Website yang dibuat profesional dan meyakinkan."
}
```

---

## 🖼️ Managing Images

### Uploading Images

1. In any image field, click "Choose an image"
2. Options:
   - **Upload**: Select file from computer
   - **Choose**: Pick from already uploaded
3. Click "Insert from Media Library"

### Image Best Practices

**File Naming:**
- Use lowercase
- Use hyphens, not spaces
- Descriptive names
- Example: `team-member-john-doe.jpg`

**Optimization:**
- Compress before upload
- Use WebP or JPG
- Max file size: 1MB
- Dimensions: Based on usage
  - Team photos: 400x400px
  - Hero images: 1200x800px
  - Testimonials: 200x200px

**Storage:**
All images stored in `/public/uploads/`

---

## 📝 Content Writing Tips

### Headlines
- Clear and concise
- Active voice
- Front-load important words
- 50-60 characters

### Descriptions
- One idea per paragraph
- Short sentences
- Use bullet points when possible
- Write for scanning

### Call-to-Actions
- Action-oriented
- Create urgency
- Be specific
- Examples:
  - ✅ "Mulai Konsultasi Gratis"
  - ✅ "Lihat Portfolio Kami"
  - ❌ "Click Here"

---

## 🔄 Publishing Workflow

### Making Changes

1. **Edit Content**
   - Navigate to collection
   - Edit fields
   - Preview changes

2. **Save Draft**
   - Click "Save" (not published yet)
   - Changes stored locally

3. **Publish**
   - Click "Publish"
   - Changes committed to Git
   - Website auto-deploys

### Workflow States

- **Draft**: Saved but not published
- **In Review**: Ready for review (if enabled)
- **Published**: Live on website

---

## 🔍 Finding Your Content

### Search
- Use search box in top bar
- Searches across all content
- Filter by collection

### Filter
- By status (draft/published)
- By date
- By author (if multiple users)

---

## 👥 Multiple Users

### Adding Users

#### GitHub-based:
1. User must have GitHub account
2. Add as collaborator to repository
3. They can login with GitHub

#### Netlify Identity:
1. Go to Netlify → Identity
2. Invite user via email
3. User creates password
4. User can login to CMS

### Roles

- **Admin**: Full access
- **Editor**: Can edit all content
- **Contributor**: Can create drafts

Configure in Netlify Identity settings.

---

## 🚨 Common Issues & Solutions

### Issue: Can't Login

**Solution:**
- Check GitHub OAuth configuration
- Clear browser cache
- Try incognito mode
- Verify you're a repository collaborator

### Issue: Changes Not Showing

**Solution:**
- Wait 1-2 minutes for deployment
- Clear browser cache
- Check if changes were published (not just saved)
- Verify Git commit in repository

### Issue: Image Not Uploading

**Solution:**
- Check file size (< 5MB)
- Use JPG or PNG format
- Check file name (no spaces or special characters)
- Try different browser

### Issue: Can't Delete Item

**Solution:**
- Check if you have permissions
- Some items might be required
- Delete from Git repository if needed

---

## 🔧 Advanced: Editing config.yml

Location: `/public/admin/config.yml`

**When to edit:**
- Adding new fields
- Changing collection structure
- Adding new collections
- Customizing widgets

**Important:** Always test locally first!

### Adding a New Field

```yaml
fields:
  - { label: "Title", name: "title", widget: "string" }
  - { label: "New Field", name: "newField", widget: "text" }
```

### Available Widgets
- `string`: Short text
- `text`: Long text (textarea)
- `number`: Numbers
- `boolean`: On/off toggle
- `datetime`: Date/time picker
- `image`: Image uploader
- `select`: Dropdown
- `list`: Repeating items
- `object`: Grouped fields

---

## 💾 Backup & Restore

### Content Backup
- All content in Git = automatic backup
- Clone repository = full backup
- Export via Git

### Restore Content
1. Find old commit in Git
2. Restore file
3. Commit and push

---

## 📊 Content Strategy

### Update Frequency

**Weekly:**
- Blog posts (if added)
- Testimonials

**Monthly:**
- Team updates
- Package pricing
- Service descriptions

**Quarterly:**
- About section
- Company stats
- Social links

**Yearly:**
- General settings
- FAQ updates

---

## 🎯 SEO Best Practices

### Content Optimization

**Use Keywords:**
- In titles
- In descriptions
- Naturally throughout content

**Meta Descriptions:**
- 150-160 characters
- Include main keyword
- Clear call-to-action

**Alt Text for Images:**
- Describe image content
- Include relevant keywords
- Keep concise

---

## 📞 Getting Help

### Resources
- Decap CMS Docs: https://decapcms.org/docs/
- GitHub Issues: For technical problems
- Internal documentation: README.md

### Support Contacts
- Technical support: dev@levanatechnology.com
- Content questions: content@levanatechnology.com

---

## ✅ Content Checklist

Before publishing:

- [ ] Spell check all text
- [ ] Links work correctly
- [ ] Images load properly
- [ ] Mobile preview looks good
- [ ] No placeholder text
- [ ] Contact info is correct
- [ ] Prices are up-to-date
- [ ] Team photos are current

---

Happy content managing! 🎉
