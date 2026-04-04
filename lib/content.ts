import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Settings, TeamMember, About, Service, Package, Testimonial, FAQ } from '@/types';

const contentDirectory = path.join(process.cwd(), 'content');

export function getSettings(): Settings {
  try {
    const fullPath = path.join(contentDirectory, 'settings', 'general.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return {
      whatsappNumber: '6287007449733',
      businessEmail: 'info@levanatechnology.com',
      ctaText: 'Mulai Konsultasi',
      companyName: 'Levana Technology',
      companyDescription: 'Agensi website personal branding terdedikasi untuk kreator dan solopreneur.',
      socialMedia: {
        instagram: 'https://instagram.com/levanatechnology',
        linkedin: 'https://linkedin.com/company/levana-technology',
        facebook: 'https://facebook.com/levanatechnology',
        github: 'https://github.com/levanatechnology',
      },
    };
  }
}

export function getAbout(): About {
  try {
    const fullPath = path.join(contentDirectory, 'about', 'index.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return JSON.parse(fileContents);
  } catch {
    return {
      title: 'Levana Technology',
      description: 'Menghadirkan Website yang Merefleksikan Nilai Diri Anda Secara Sempurna.',
      stats: {
        availability: '24/7',
        projects: '10+',
        satisfaction: '98%',
      },
    };
  }
}

export function getTeamMembers(): TeamMember[] {
  try {
    const teamDir = path.join(contentDirectory, 'team');
    const files = fs.readdirSync(teamDir);
    
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => {
        const fullPath = path.join(teamDir, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        return JSON.parse(fileContents);
      });
  } catch {
    return [];
  }
}

export function getServices(): Service[] {
  try {
    const fullPath = path.join(contentDirectory, 'services', 'services.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(fileContents);
    return data.services || [];
  } catch {
    return [];
  }
}

export function getPackages(): Package[] {
  try {
    const fullPath = path.join(contentDirectory, 'packages', 'packages.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(fileContents);
    return data.packages || [];
  } catch {
    return [];
  }
}

export function getTestimonials(): Testimonial[] {
  try {
    const fullPath = path.join(contentDirectory, 'testimonials', 'testimonials.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(fileContents);
    return data.testimonials || [];
  } catch {
    return [];
  }
}

export function getFAQs(): FAQ[] {
  try {
    const fullPath = path.join(contentDirectory, 'settings', 'faq.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(fileContents);
    return data.faqs || [];
  } catch {
    return [];
  }
}
