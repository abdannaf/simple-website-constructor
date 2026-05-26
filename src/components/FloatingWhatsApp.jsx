import { IconBrandWhatsapp } from "@tabler/icons-react";

const WHATSAPP_NUMBER = "6281234567890";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Halo Dexlory, saya ingin konsultasi project konstruksi."
  );

  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp Dexlory"
      className="fixed bottom-5 right-5 z-[90] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_35px_rgba(37,211,102,0.38)] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <IconBrandWhatsapp size={30} stroke={2.1} />
      <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-[var(--bg-dark)] px-4 py-2 text-sm font-semibold text-white shadow-xl sm:block">
        Chat WhatsApp
      </span>
    </a>
  );
}
