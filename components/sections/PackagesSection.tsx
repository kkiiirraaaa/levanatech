"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/utils";
import type { Package } from "@/types";

interface PackagesSectionProps {
  packages: Package[];
}

export default function PackagesSection({ packages }: PackagesSectionProps) {
  const router = useRouter();

  const categories = Array.from(new Set(packages.map((pkg) => pkg.category)));
  const [activeTab, setActiveTab] = useState(categories[0]);

  const filtered = packages.filter((pkg) => pkg.category === activeTab);

  if (packages.length === 0) return null;

  return (
    <section id="packages" className="py-20 bg-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-badge bg-dark rounded-lg border border-primary text-center text-gray-200 mx-auto">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                clipRule="evenodd"
              />
            </svg>
            Packages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
            Find the Right Website Solution for Your Needs
          </h2>
          <p className="text-primary-lighter max-w-2xl mx-auto">
            Flexible packages to help individuals and businesses build a strong
            and professional digital presence.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-dark-lighter rounded-xl p-1 gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${
                    activeTab === cat
                      ? "bg-primary text-white"
                      : "text-primary-lighter hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
            {filtered.map((pkg) => (
              <div
                key={pkg.id}
                className="relative bg-dark-lighter border-4 border-t-8 border-dark-lighter rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-primary"
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
                      Populer
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-primary-lighter text-sm mb-4 min-h-[48px]">
                    {pkg.description}
                  </p>
                  <div className="border-t border-gray-600 mb-4"></div>
                  <div className="text-3xl font-bold mb-6">
                    {formatPrice(pkg.price)}
                  </div>

                  <button
                    onClick={() =>
                      router.push(
                        `/order?package=${encodeURIComponent(pkg.name)}`,
                      )
                    }
                    className="block w-full text-center py-3 rounded-lg font-medium border-2 border-primary text-primary-light hover:bg-primary hover:text-white transition-colors duration-200 mb-6"
                  >
                    Order Now
                  </button>
                </div>

                <ul className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm text-primary-lighter">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
