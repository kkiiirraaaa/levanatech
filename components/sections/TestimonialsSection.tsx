"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import type { Testimonial } from "@/types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const CARDS_PER_PAGE = 3;

  useEffect(() => {
    setTotalPages(Math.ceil(testimonials.length / CARDS_PER_PAGE));
  }, [testimonials.length]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const page = Math.round((scrollLeft / maxScroll) * (totalPages - 1));
    setActivePage(page);
  }, [totalPages]);

  const scrollToPage = (page: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    const target = (page / (totalPages - 1)) * maxScroll;
    el.scrollTo({ left: target, behavior: "smooth" });
    setActivePage(page);
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 bg-dark overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-badge bg-dark rounded-lg border border-primary text-center text-gray-200 mx-auto">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Reputation Built on Results
          </h2>
          <p className="text-primary-light mx-auto">
            Discover how our commitment to excellence has helped our clients achieve success.
          </p>
        </div>

        {/* Scrollable Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style>{`
            #testimonials-scroll::-webkit-scrollbar { display: none; }
          `}</style>

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[85vw] sm:w-[340px] md:w-[360px] bg-dark-lighter border border-dark-lighter rounded-xl p-6 hover:border-primary transition-colors duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    className={`w-5 h-5 ${
                      index < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-light mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full bg-primary flex-shrink-0 overflow-hidden">
                  {testimonial.photo ? (
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-lg font-bold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activePage
                    ? "bg-primary w-6 h-2"
                    : "bg-gray-600 hover:bg-gray-400 w-2 h-2"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
