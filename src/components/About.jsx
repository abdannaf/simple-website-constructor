import Hero from "../assets/hero.jpg";
import {
  IconArrowRight,
  IconBuildingSkyscraper,
  IconCalendarCheck,
  IconCheck,
  IconClipboardCheck,
  IconRulerMeasure,
  IconShieldCheck,
  IconTool,
} from "@tabler/icons-react";

const VALUES = [
  "RAB dan timeline dijelaskan sejak awal",
  "Material dipilih sesuai kebutuhan bangunan",
  "Progress project dikabarkan secara berkala",
  "Finishing dicek sebelum serah terima",
];

const PROCESS = [
  {
    icon: <IconRulerMeasure size={22} />,
    title: "Survei & Ukur",
    desc: "Kami cek kebutuhan, kondisi lokasi, dan target desain.",
  },
  {
    icon: <IconClipboardCheck size={22} />,
    title: "Rencana Kerja",
    desc: "Anda mendapat estimasi biaya, material, dan jadwal kerja.",
  },
  {
    icon: <IconTool size={22} />,
    title: "Eksekusi Rapi",
    desc: "Tim lapangan bekerja sesuai standar kualitas yang disepakati.",
  },
];

const STATS = [
  {
    icon: <IconBuildingSkyscraper size={20} />,
    value: "250+",
    label: "Project Selesai",
  },
  {
    icon: <IconCalendarCheck size={20} />,
    value: "12+",
    label: "Tahun Pengalaman",
  },
  {
    icon: <IconShieldCheck size={20} />,
    value: "98%",
    label: "Client Puas",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 overflow-hidden bg-(--bg-warm) py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="overflow-hidden rounded-[20px]">
                <img
                  src={Hero.src}
                  alt="Tim konstruksi mengecek detail bangunan"
                  className="h-115 w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="rounded-[20px] bg-(--bg-dark) p-6 text-white">
                  <p className="text-sm text-white/60">Standar kerja</p>
                  <p className="mt-3 text-4xl font-black">A-Z</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    Dari konsultasi, desain, konstruksi, sampai serah terima.
                  </p>
                </div>

                <div className="overflow-hidden rounded-[20px]">
                  <img
                    src={Hero.src}
                    alt="Interior hunian modern"
                    className="h-63 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 max-w-65 rounded-[18px] border border-white/20 bg-white/90 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-(--accent) text-black">
                  <IconShieldCheck size={23} />
                </span>
                <div>
                  <p className="font-bold text-gray-900">Terpercaya</p>
                  <p className="text-sm text-gray-500">Bergaransi pekerjaan</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ead7a9] bg-(--accent-soft) px-4 py-2 text-sm font-semibold text-[#7a5a1f]">
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
              Tentang [YourName]
            </div>

            <h2 className="max-w-3xl text-4xl font-black leading-tight text-[#1f1f1f] md:text-5xl">
              Partner konstruksi yang membuat proses bangun terasa lebih jelas.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#5e5e5e]">
              Kami membantu pemilik rumah dan bisnis mengubah kebutuhan ruang
              menjadi bangunan yang kokoh, fungsional, dan enak digunakan.
              Fokus kami sederhana: komunikasi jelas, pengerjaan rapi, dan
              keputusan teknis yang bisa dipahami client.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {VALUES.map((value) => (
                <div
                  key={value}
                  className="flex items-start gap-3 rounded-2xl border border-[#e5dfd2] bg-white p-4"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <IconCheck size={17} stroke={2.5} />
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-gray-700">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {PROCESS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[18px] border border-[#e5dfd2] bg-[#fffaf1] p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-amber-700">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href="#services"
                className="group inline-flex w-fit items-center gap-3 rounded-2xl bg-(--bg-dark) px-7 py-4 text-sm font-semibold text-white no-underline shadow-xl transition-all duration-300 hover:bg-(--accent) hover:text-black"
              >
                Lihat Layanan
                <IconArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <div className="grid flex-1 grid-cols-3 gap-3">
                {STATS.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-white p-4">
                    <div className="text-amber-700">{stat.icon}</div>
                    <p className="mt-3 text-xl font-black text-gray-900">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
