import Image from 'next/image';
import type { TeamMember } from '@/types';
import Link from 'next/link';

interface CTASectionProps {
  ctaText: string;
}

interface TeamSectionProps {
  team: TeamMember[];
}

export default function TeamSection({ team }: TeamSectionProps) {
  if (team.length === 0) return null;

  return (
    <section id="team" className="py-20 bg-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <span className="section-badge bg-dark rounded-lg border border-primary text-center text-gray-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
              Let's Meet Our Team
            </h2>
            <p className="text-primary-lighter mb-6">
              Setiap mahakarya lahir dari kolaborasi yang kuat. Kami adalah
              kumpulan individu yang menyatukan visi, kreativitas, dan teknologi
              untuk menciptakan solusi digital yang nyata bagi anda.
            </p>
          </div>

          
          {/* Right Team Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {team.map((member) => (
    <div
      key={member.id}
      className="bg-dark-lighter border border-dark-lighter rounded-xl p-6 hover:border-primary transition-colors duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="relative w-20 h-20 rounded-full bg-primary flex-shrink-0 overflow-hidden">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-white">
              {member.name.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">{member.name}</h3>
          <p className="text-sm text-primary-lighter mb-2">{member.position}</p>
          {member.linkedin && (
             <a href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary-light transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  ))}

  {/* CTA Card Biru */}
  <div className="bg-primary border border-primary rounded-xl p-6 flex flex-col justify-between">
    <p className="text-white text-sm mb-4">
      lorem ipsum
    </p>
    <Link
      href="/#about"
      className="inline-block bg-dark text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-dark-lighter transition-colors duration-200 text-center"
    >
      Let's Meet Our Team
    </Link>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
