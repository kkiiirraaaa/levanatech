export interface Settings {
  whatsappNumber: string;
  businessEmail: string;
  ctaText: string;
  companyName: string;
  companyDescription: string;
  socialMedia: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    github?: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  photo: string;
  description?: string;
  linkedin?: string;
}

export interface About {
  title: string;
  description: string;
  image?: string;
  stats: {
    availability: string;
    projects: string;
    satisfaction: string;
  };
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Package {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  isPopular: boolean;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  photo: string;
  rating: number;
  content: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface WhatsAppFormData {
  fullName: string;
  email: string;
  package: string;
  details: string;
}
