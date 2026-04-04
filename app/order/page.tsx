import { Suspense } from "react";
import WhatsAppForm from "@/components/sections/WhatsAppForm";
import { getSettings, getPackages } from "@/lib/content";

export default function OrderPage() {
  const settings = getSettings();
  const packages = getPackages();
  const packageNames = packages.map((pkg) => pkg.name);

  return (
    <main className="min-h-screen bg-black">
      <Suspense fallback={null}>
        <WhatsAppForm
          whatsappNumber={settings.whatsappNumber}
          packages={packageNames}
        />
      </Suspense>
    </main>
  );
}
