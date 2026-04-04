import type { Service } from '@/types';

interface ServicesSectionProps {
  services: Service[];
}

const defaultServices: Service[] = [
  {
    id: '1',
    icon: 'globe',
    title: 'Personal Branding Website',
    description: 'A professional website that showcases your expertise, story, and achievements -- helping you build credibility and stand out in your industry.',
  },
  {
    id: '2',
    icon: 'users',
    title: 'Business Website Strategic',
    description: 'A structured website designed to communicate your business value clarity and turn visitors into potential customers.',
  },
  {
    id: '3',
    icon: 'compass',
    title: 'Brand & Visual Design',
    description: 'Strategic visual design that build a recognizeable and consistent brand across your diital presence.',
  },
];

const iconMap: Record<string, JSX.Element> = {
  globe: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  users: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  compass: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
    </svg>
  ),
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  const displayServices = services.length > 0 ? services : defaultServices;

  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-badge bg-dark rounded-lg border border-primary text-center text-gray-200 mx-auto">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
              <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
            Digital Foundations for Growing Businesses
          </h2>
          <p className="text-primary-light max-w-2xl mx-auto">
            We help businesses and SMEs build professional digital platforms
            that strengthen credibility, attract potential customers, and
            support long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <div
              key={service.id}
              className="bg-dark-lighter rounded-xl p-6 transition-all duration-300  hover:shadow-[13px_13px_10px_3px_rgba(99,102,241,0.4)]"
            >
              {/* Icon bulat */}
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                {iconMap[service.icon] || iconMap.globe}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-primary-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
