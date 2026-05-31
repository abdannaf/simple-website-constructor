import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconChevronRight,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconShieldCheck,
} from "@tabler/icons-react";

export default function Footer() {
  const links = {
    layanan: [
      { label: "Pembangunan Rumah", href: "#services" },
      { label: "Renovasi Interior", href: "#services" },
      { label: "Perbaikan Struktur", href: "#services" },
      { label: "Konstruksi Komersial", href: "#services" },
      { label: "Konsultasi Gratis", href: "#welcome" },
    ],
    perusahaan: [
      { label: "Tentang Kami", href: "#about" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testimoni", href: "#testimonials" },
      { label: "Kontak", href: "#contact" },
    ],
  };

  const kontak = [
    { icon: <IconMapPin size={15} />, text: "Jl. Konstruksi No. 12, Jakarta" },
    { icon: <IconPhone size={15} />, text: "+62 812-3456-7890" },
    { icon: <IconMail size={15} />, text: "hello@nusabuild.com" },
    { icon: <IconClock size={15} />, text: "Senin-Sabtu, 08.00-17.00" },
  ];

  const sosmed = [
    { icon: <IconBrandInstagram size={16} />, label: "Instagram", href: "#" },
    { icon: <IconBrandWhatsapp size={16} />, label: "WhatsApp", href: "#" },
    { icon: <IconBrandFacebook size={16} />, label: "Facebook", href: "#" },
    { icon: <IconBrandYoutube size={16} />, label: "YouTube", href: "#" },
  ];

  return (
    <footer
      id="contact"
      className="scroll-mt-28 bg-(--bg-dark) px-6 pb-8 pt-16 text-gray-300 sm:px-10 md:px-16"
    >
      <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-xl font-bold text-white">
            Nusa<span className="text-(--accent)"> Build</span>
          </p>
          <p className="mb-5 mt-3 max-w-xs text-sm leading-relaxed text-gray-400">
            Kami hadir untuk mewujudkan setiap proyek bangunan Anda dengan
            standar kualitas premium dan pengerjaan yang dapat dipercaya.
          </p>
          <div className="flex w-fit items-center gap-2 rounded-lg bg-(--accent) px-3 py-2 text-xs font-semibold text-black">
            <IconShieldCheck size={15} />
            Bergaransi & Bersertifikat
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
            Layanan
          </h2>
          <ul className="flex flex-col gap-2">
            {links.layanan.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-gray-400 no-underline transition-colors hover:text-(--accent)"
                >
                  <IconChevronRight size={14} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
            Perusahaan
          </h2>
          <ul className="flex flex-col gap-2">
            {links.perusahaan.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-gray-400 no-underline transition-colors hover:text-(--accent)"
                >
                  <IconChevronRight size={14} />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-white">
            Kontak
          </h2>
          <ul className="flex flex-col gap-3">
            {kontak.map((item) => (
              <li key={item.text} className="flex items-start gap-2 text-sm text-gray-400">
                <span className="mt-0.5 shrink-0 text-(--accent)">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
        <p className="text-xs text-gray-500">
          © 2026 Nusa Build. Semua hak dilindungi.
        </p>

        <div className="flex gap-3">
          {sosmed.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-700 text-gray-400 transition-colors hover:border-(--accent) hover:text-(--accent)"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
