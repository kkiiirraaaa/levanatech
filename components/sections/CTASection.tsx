import Link from 'next/link';

interface CTASectionProps {
  ctaText: string;
}

export default function CTASection({ ctaText }: CTASectionProps) {
  return (
    <section className="py-20 bg-primary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Siap Tampilkan Nilai Terbaik Anda di Level Tertinggi?
          </h2>
          <Link
            href="/#contact"
            className="inline-block bg-white text-black hover:bg-gray-100 font-medium px-8 py-4 rounded-lg transition-colors duration-200"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
