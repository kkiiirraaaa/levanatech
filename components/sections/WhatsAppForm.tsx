'use client';

import { useState, useEffect } from 'react';
import { formatWhatsAppMessage, generateWhatsAppLink } from '@/lib/utils';
import type { WhatsAppFormData } from '@/types';
import { useSearchParams } from 'next/navigation';

interface WhatsAppFormProps {
  whatsappNumber: string;
  packages: string[];
}

export default function WhatsAppForm({ whatsappNumber, packages }: WhatsAppFormProps) {
   const searchParams = useSearchParams();

   const [formData, setFormData] = useState<WhatsAppFormData>({
     fullName: "",
     email: "",
     package: "", 
     details: "",
   });

   useEffect(() => {
     const selected = searchParams.get("package");
     if (selected && packages.includes(selected)) {
       setFormData((prev) => ({ ...prev, package: selected }));
     }
   }, [searchParams, packages]);

  const [errors, setErrors] = useState<Partial<Record<keyof WhatsAppFormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof WhatsAppFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (!formData.package) {
      newErrors.package = 'Pilih paket terlebih dahulu';
    }

    if (!formData.details.trim()) {
      newErrors.details = 'Detail kebutuhan wajib diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const message = formatWhatsAppMessage(formData);
    const whatsappLink = generateWhatsAppLink(whatsappNumber, message);

    window.open(whatsappLink, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof WhatsAppFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

 

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Formulir Pemesanan Levana Technology
            </h2>
            <p className="text-gray-300">
              Mulai Perjalanan Digital Anda. Isi detail di bawah untuk
              konsultasi branding.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nama Lengkap */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium mb-2"
                >
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark border ${
                    errors.fullName ? "border-red-500" : "border-dark-lighter"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
                  placeholder="Masukkan nama lengkap"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-dark border ${
                    errors.email ? "border-red-500" : "border-dark-lighter"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
                  placeholder="nama@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Pilihan Paket */}
            <div>
              <label
                htmlFor="package"
                className="block text-sm font-medium mb-2"
              >
                Pilihan Paket <span className="text-red-500">*</span>
              </label>
              <select
                id="package"
                name="package"
                value={formData.package}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-dark border ${
                  errors.package ? "border-red-500" : "border-dark-lighter"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors`}
              >
                <option value="">Pilih paket</option>
                {packages.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
              {errors.package && (
                <p className="mt-1 text-sm text-red-500">{errors.package}</p>
              )}
            </div>

            {/* Detail Kebutuhan */}
            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium mb-2"
              >
                Detail Kebutuhan <span className="text-red-500">*</span>
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 bg-dark border ${
                  errors.details ? "border-red-500" : "border-dark-lighter"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none`}
                placeholder="Ceritakan kebutuhan Anda..."
              />
              {errors.details && (
                <p className="mt-1 text-sm text-red-500">{errors.details}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Kirim Ke Whatsapp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
