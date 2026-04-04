import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  ctaText: string;
}

export default function HeroSection({ ctaText }: HeroSectionProps) {
  return (
    <section id="hero" className="bg-dark py-14 scroll-mt-14 md:pl-16 md:pr-16">
      <div className="bg-dark-lighter max-w-7xl container-custom rounded-2xl overflow-hidden relative">
        <Image
          src="/images/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 z-10" />

        {/* Content */}
        <div className="relative z-20  pb-4 grid grid-cols-1 pt-10 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold pt-4 pl-7 pb-4">
              Build <span className="text-primary"> Trust </span> Through a
              <br />
              Professional <span className="text-primary"> Website </span> for <br />
               Your Business.
            </h1>
            <p className="text-primary-light text-lg  pl-7 pb-4">
              We help businesses and SMEs create professional website designed to
              <br />
              strengthen brand credibility, attract potential customers, and turn
              <br />
              website visitors into real business opportunities.
              
            </p>
            <div className="flex flex-col sm:flex-row pb-10 pl-7 gap-4">
              <Link
                href="#packages"
                className="inline-block bg-primary-dark border border-primary hover:bg-blue-700 font-medium px-5 py-2 rounded-lg transition-colors duration-200"
              >
                {ctaText}
              </Link>
              <Link
                href="#services"
                className="inline-block bg-dark-lighter border border-primary-light text-primary-light hover:bg-gray-100 font-medium px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}