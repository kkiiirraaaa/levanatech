import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PackagesSection from '@/components/sections/PackagesSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import WhatsAppForm from '@/components/sections/WhatsAppForm';
import {
  getSettings,
  getAbout,
  getServices,
  getPackages,
  getTeamMembers,
  getTestimonials,
  getFAQs,
} from '@/lib/content';

export default function HomePage() {
  const settings = getSettings();
  const about = getAbout();
  const services = getServices();
  const packages = getPackages();
  const team = getTeamMembers();
  const testimonials = getTestimonials();
  const faqs = getFAQs();

  const packageNames = packages.map((pkg) => pkg.name);

  return (
    <>
      <HeroSection ctaText={settings.ctaText} />
      <AboutSection about={about} />
      <ServicesSection services={services} />
      <PackagesSection packages={packages} />
      <TeamSection team={team} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection faqs={faqs} />
      <CTASection ctaText={settings.ctaText} />
    </>
  );
}
