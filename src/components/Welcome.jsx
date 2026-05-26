import { useState } from "react";
import {
  IconArrowRight,
  IconCalendarCheck,
  IconCheck,
  IconHomeStar,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";
import Hero from "../assets/hero.jpg";

const FEATURES = [
  {
    icon: <IconHomeStar size={26} stroke={1.8} />,
    title: "Desain Modern",
    desc: "Hunian elegan, nyaman, dan sesuai dengan gaya hidup masa kini.",
  },
  {
    icon: <IconUsers size={26} stroke={1.8} />,
    title: "Tim Berpengalaman",
    desc: "Dikerjakan tenaga profesional dengan standar hasil yang rapi.",
  },
  {
    icon: <IconCalendarCheck size={26} stroke={1.8} />,
    title: "Timeline Jelas",
    desc: "Progress project lebih terstruktur dari survei sampai serah terima.",
  },
  {
    icon: <IconShieldCheck size={26} stroke={1.8} />,
    title: "Transparan",
    desc: "Biaya dan progress dijelaskan terbuka agar Anda lebih tenang.",
  },
];

const STATS = [
  { value: "150+", label: "Project Selesai" },
  { value: "12+", label: "Tahun Pengalaman" },
  { value: "98%", label: "Client Puas" },
];

const SERVICES = [
  "Pembangunan Rumah",
  "Desain Interior",
  "Renovasi & Perbaikan",
  "Konstruksi Komersial",
];

const WHATSAPP_NUMBER = "6281234567890";

export default function DexloryHero() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0],
  });
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (!form.name.trim() || !form.phone.trim()) return;

    const message = [
      "Halo Dexlory, saya ingin konsultasi project.",
      `Nama: ${form.name}`,
      `WhatsApp: ${form.phone}`,
      `Email: ${form.email || "-"}`,
      `Kebutuhan: ${form.service}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="overflow-hidden bg-(--bg-warm) bg-accent-soft">
      <section
        id="welcome"
        className="relative flex min-h-screen items-center scroll-mt-28"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Hero.src})` }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/66 to-black/35" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-(--accent)" />
                Kontraktor Profesional & Terpercaya
              </div>

              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
                Bangun Hunian
                <span className="text-(--accent)"> Impian </span>
                Anda Bersama Tim Profesional
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 lg:text-lg">
                Kami membantu Anda membangun rumah, interior, dan bangunan
                komersial yang kokoh, nyaman, dan rapi dari perencanaan sampai
                serah terima.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-2xl bg-(--accent) px-7 py-4 font-bold text-black no-underline shadow-xl transition-all duration-300 hover:bg-[#e2bd69] hover:scale-[1.02]"
                >
                  Konsultasi Gratis
                  <IconArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white no-underline backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Lihat Project
                </a>
              </div>

              <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 sm:gap-8">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-extrabold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-[28px] border border-white/20 bg-white/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-8">
                <h2 className="text-2xl font-bold leading-tight text-gray-900">
                  Jadwalkan Konsultasi
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  Ceritakan kebutuhan bangunan Anda. Tim kami akan merespons
                  lewat WhatsApp.
                </p>

                <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="consultation-name"
                      className="text-xs font-semibold uppercase tracking-wide text-gray-600"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="consultation-name"
                      type="text"
                      placeholder="Masukkan nama Anda"
                      value={form.name}
                      onChange={(event) => updateForm("name", event.target.value)}
                      aria-invalid={submitted && !form.name.trim()}
                      className={`mt-1.5 w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-(--accent) focus:bg-white ${
                        submitted && !form.name.trim()
                          ? "border-red-400"
                          : "border-gray-200"
                      }`}
                    />
                    {submitted && !form.name.trim() && (
                      <p className="mt-1 text-xs font-medium text-red-500">
                        Nama wajib diisi.
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="consultation-phone"
                      className="text-xs font-semibold uppercase tracking-wide text-gray-600"
                    >
                      Nomor WhatsApp
                    </label>
                    <input
                      id="consultation-phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      value={form.phone}
                      onChange={(event) => updateForm("phone", event.target.value)}
                      aria-invalid={submitted && !form.phone.trim()}
                      className={`mt-1.5 w-full rounded-xl border bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-(--accent) focus:bg-white ${
                        submitted && !form.phone.trim()
                          ? "border-red-400"
                          : "border-gray-200"
                      }`}
                    />
                    {submitted && !form.phone.trim() && (
                      <p className="mt-1 text-xs font-medium text-red-500">
                        Nomor WhatsApp wajib diisi.
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="consultation-email"
                      className="text-xs font-semibold uppercase tracking-wide text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      id="consultation-email"
                      type="email"
                      placeholder="emailanda@gmail.com"
                      value={form.email}
                      onChange={(event) => updateForm("email", event.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-(--accent) focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="consultation-service"
                      className="text-xs font-semibold uppercase tracking-wide text-gray-600"
                    >
                      Kebutuhan Project
                    </label>
                    <select
                      id="consultation-service"
                      value={form.service}
                      onChange={(event) => updateForm("service", event.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-(--accent) focus:bg-white"
                    >
                      {SERVICES.map((service) => (
                        <option key={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-(--accent) py-4 font-bold text-black shadow-lg transition-all duration-300 hover:bg-[#e2bd69] hover:scale-[1.01]"
                  >
                    Minta Konsultasi
                    <IconArrowRight size={18} />
                  </button>
                </form>

                <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-gray-500">
                  <IconCheck size={15} className="text-green-600" />
                  Dipercaya oleh 150+ client di berbagai project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-12 px-6 pb-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <article
              key={feature.title}
              className={`rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                index === 2
                  ? "bg-(--bg-dark) text-white"
                  : "bg-white text-gray-900"
              }`}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold">{feature.title}</h3>
              <p
                className={`text-sm leading-relaxed ${
                  index === 2 ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {feature.desc}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
