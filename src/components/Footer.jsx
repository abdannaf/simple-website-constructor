// Footer.jsx
import { IconShieldCheck, IconChevronRight, IconMapPin, IconPhone, IconMail, IconClock, IconBrandInstagram, IconBrandWhatsapp, IconBrandFacebook, IconBrandYoutube } from '@tabler/icons-react';

export default function Footer() {
  const links = {
    layanan: ['Pembangunan Rumah', 'Renovasi Interior', 'Perbaikan Struktur', 'Konstruksi Komersial', 'Konsultasi Gratis'],
    perusahaan: ['Tentang Kami', 'Portfolio', 'Testimoni', 'Karir'],
  };

  const kontak = [
    { icon: <IconMapPin size={15} />, text: 'Jl. Konstruksi No. 12, Jakarta' },
    { icon: <IconPhone size={15} />, text: '+62 812-3456-7890' },
    { icon: <IconMail size={15} />, text: 'hello@buildpro.id' },
    { icon: <IconClock size={15} />, text: 'Senin–Sabtu, 08.00–17.00' },
  ];

  const sosmed = [
    { icon: <IconBrandInstagram size={16} />, label: 'Instagram', href: '#' },
    { icon: <IconBrandWhatsapp size={16} />, label: 'WhatsApp', href: '#' },
    { icon: <IconBrandFacebook size={16} />, label: 'Facebook', href: '#' },
    { icon: <IconBrandYoutube size={16} />, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 px-6 sm:px-10 md:px-16 pt-16 pb-8">

      {/* Grid utama */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <p className="text-white text-xl font-bold">
            Build<span className="text-amber-400">Pro</span> Construction
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mt-3 mb-5 max-w-xs">
            Kami hadir untuk mewujudkan setiap proyek bangunan Anda dengan standar
            kualitas premium dan pengerjaan yang dapat dipercaya.
          </p>
          <div className="flex items-center gap-2 bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-2 rounded-lg w-fit">
            <IconShieldCheck size={15} />
            Bergaransi & Bersertifikat
          </div>
        </div>

        {/* Layanan */}
        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Layanan</h4>
          <ul className="flex flex-col gap-2">
            {links.layanan.map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-400 text-sm hover:text-amber-400 transition-colors cursor-pointer">
                <IconChevronRight size={14} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Perusahaan */}
        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Perusahaan</h4>
          <ul className="flex flex-col gap-2">
            {links.perusahaan.map((item) => (
              <li key={item} className="flex items-center gap-2 text-gray-400 text-sm hover:text-amber-400 transition-colors cursor-pointer">
                <IconChevronRight size={14} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-4">Kontak</h4>
          <ul className="flex flex-col gap-3">
            {kontak.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                <span className="text-amber-400 mt-0.5 shrink-0">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs">
          © 2025 BuildPro Construction. Semua hak dilindungi.
        </p>

        {/* Sosial Media */}
        <div className="flex gap-3">
          {sosmed.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-8 h-8 rounded-lg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}