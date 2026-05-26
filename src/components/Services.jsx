import { useState } from "react";
import {
  IconArrowRight,
  IconBuildingBridge,
  IconBuildingSkyscraper,
  IconCheck,
  IconHammer,
  IconHomeCog,
} from "@tabler/icons-react";

const SERVICES = [
  {
    icon: <IconBuildingSkyscraper size={28} stroke={1.8} />,
    title: "Pembangunan Rumah",
    category: "Residential",
    desc: "Bangun rumah dari nol dengan perencanaan struktur, material, dan finishing yang jelas.",
    includes: ["Survey lokasi", "RAB pekerjaan", "Pengerjaan struktur", "Finishing interior"],
    duration: "8-24 minggu",
  },
  {
    icon: <IconHomeCog size={28} stroke={1.8} />,
    title: "Desain Interior",
    category: "Interior",
    desc: "Membuat ruang terasa lebih nyaman, rapi, dan sesuai kebutuhan aktivitas harian.",
    includes: ["Layout ruang", "Moodboard material", "Custom furniture", "Instalasi rapi"],
    duration: "3-10 minggu",
  },
  {
    icon: <IconHammer size={28} stroke={1.8} />,
    title: "Renovasi & Perbaikan",
    category: "Renovation",
    desc: "Renovasi rumah, ruko, atau ruang usaha dengan pengerjaan bertahap dan terukur.",
    includes: ["Cek kondisi existing", "Pembongkaran aman", "Perbaikan struktur", "Finishing ulang"],
    duration: "2-12 minggu",
  },
  {
    icon: <IconBuildingBridge size={28} stroke={1.8} />,
    title: "Konstruksi Komersial",
    category: "Commercial",
    desc: "Pengerjaan bangunan usaha, kantor, cafe, dan project skala lebih besar.",
    includes: ["Manajemen timeline", "Koordinasi vendor", "Kontrol kualitas", "Dokumentasi progress"],
    duration: "12+ minggu",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES[activeIndex];

  return (
    <section
      id="services"
      className="scroll-mt-28 overflow-hidden bg-(--bg-white) px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-(--accent-soft) px-4 py-2 text-sm font-semibold text-[#7a5a1f]">
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
              Layanan Kami
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Pilih layanan sesuai tahap project Anda.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-gray-600 lg:justify-self-end">
            Setiap project punya kebutuhan berbeda. Pilih layanan untuk melihat
            gambaran scope, estimasi durasi, dan apa saja yang biasanya kami
            siapkan sejak awal.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <div className="grid gap-3">
            {SERVICES.map((service, index) => {
              const active = index === activeIndex;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={active}
                  className={`group flex items-center gap-4 rounded-[18px] border p-4 text-left transition-all duration-300 ${
                    active
                      ? "border-(--bg-dark) bg-(--bg-dark) text-white shadow-xl"
                      : "border-gray-200 bg-white text-gray-900 hover:border-amber-300 hover:shadow-lg"
                  }`}
                >
                  <span
                    className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl transition-colors ${
                      active
                        ? "bg-(--accent) text-black"
                        : "bg-(--accent-soft) text-[#7a5a1f] group-hover:bg-(--accent) group-hover:text-black"
                    }`}
                  >
                    {service.icon}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold opacity-70">
                      {service.category}
                    </span>
                    <span className="mt-1 block font-bold">{service.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-(--accent) text-black">
                  {activeService.icon}
                </div>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-amber-700">
                  {activeService.category}
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-gray-900">
                  {activeService.title}
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-gray-600">
                  {activeService.desc}
                </p>
              </div>

              <div className="rounded-[18px] bg-(--bg-soft) p-5 md:min-w-44">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Estimasi Durasi
                </p>
                <p className="mt-2 text-2xl font-black text-gray-900">
                  {activeService.duration}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {activeService.includes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-(--bg-soft) p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    <IconCheck size={17} stroke={2.5} />
                  </span>
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 rounded-[18px] bg-(--bg-dark) p-5 text-white sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-bold">Belum yakin layanan mana yang cocok?</p>
                <p className="mt-1 text-sm text-white/65">
                  Ceritakan kondisi project Anda, kami bantu arahkan scope-nya.
                </p>
              </div>

              <a
                href="#contact"
                className="group inline-flex w-fit items-center gap-2 rounded-2xl bg-(--accent) px-5 py-3 text-sm font-bold text-black no-underline transition-colors hover:bg-white"
              >
                Konsultasi
                <IconArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
