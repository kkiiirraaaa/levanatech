import type { WhatsAppFormData } from '@/types';

export function formatWhatsAppMessage(data: WhatsAppFormData): string {
  const message = `Halo, saya ingin berkonsultasi!

Nama Lengkap: ${data.fullName}
Email: ${data.email}
Pilihan Paket: ${data.package}
Detail Kebutuhan: ${data.details}`;

  return encodeURIComponent(message);
}

export function generateWhatsAppLink(phoneNumber: string, message: string): string {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  return `https://wa.me/${cleanNumber}?text=${message}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}
