import { useState } from "react";
import {
  IconArrowUpRight,
  IconBuilding,
  IconCheck,
  IconMapPin,
  IconX,
} from "@tabler/icons-react";

import Hero from "../assets/download.jpg";
import portofolio2 from "../assets/portofolio2.jpg";
import portofolio3 from "../assets/portofolio3.jpg";
import portofolio4 from "../assets/portofolio4.jpg";
import portofolio5 from "../assets/portofolio5.jpg";
import portofolio6 from "../assets/portofolio6.jpg";

const PROJECTS = [
  {
    image: Hero,
    title: "Modern Minimalist House",
    category: "Residential",
    location: "Jakarta Selatan",
    year: "2026",
    desc: "Hunian modern dengan desain minimalis yang nyaman dan elegan untuk keluarga muda.",
    scope: ["Struktur", "Arsitektur", "Finishing"],
  },
  {
    image: portofolio2,
    title: "Luxury Interior Design",
    category: "Interior",
    location: "Bandung",
    year: "2026",
    desc: "Interior premium dengan perpaduan desain modern dan nuansa hangat yang nyaman.",
    scope: ["Layout", "Furniture", "Lighting"],
  },
  {
    image: portofolio3,
    title: "Cafe Renovation Project",
    category: "Renovation",
    location: "Surabaya",
    year: "2025",
    desc: "Renovasi cafe modern dengan konsep industrial yang estetik dan fungsional.",
    scope: ["Renovasi", "MEP", "Interior"],
  },
  {
    image: portofolio4,
    title: "Modern Office Building",
    category: "Commercial",
    location: "Jakarta Pusat",
    year: "2025",
    desc: "Gedung kantor modern dengan tampilan premium dan fasilitas yang lengkap.",
    scope: ["Commercial", "Facade", "Interior"],
  },
  {
    image: portofolio5,
    title: "Luxury Villa Project",
    category: "Residential",
    location: "Bali",
    year: "2025",
    desc: "Villa mewah dengan konsep tropical modern yang elegan dan eksklusif.",
    scope: ["Villa", "Landscape", "Finishing"],
  },
  {
    image: portofolio6,
    title: "Restaurant Interior",
    category: "Interior",
    location: "Yogyakarta",
    year: "2024",
    desc: "Interior restaurant dengan ambience hangat dan desain modern premium.",
    scope: ["Interior", "Furniture", "Branding Space"],
  },
];

const CATEGORIES = [
  "Semua",
  "Residential",
  "Interior",
  "Commercial",
  "Renovation",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "Semua"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="scroll-mt-28 overflow-hidden bg-(--bg-soft) px-6 py-24 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-(--accent-soft) px-4 py-2 text-sm font-semibold text-[#7a5a1f]">
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
              Portofolio Project
            </div>

            <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Project selesai yang bisa Anda jadikan referensi.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
              Lihat contoh pekerjaan kami dari rumah tinggal, interior, cafe,
              sampai bangunan komersial. Gunakan filter untuk menemukan project
              yang paling dekat dengan kebutuhan Anda.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveCategory("Semua")}
            className="group flex w-fit items-center gap-3 rounded-2xl bg-(--accent) px-7 py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:bg-[#e2bd69] hover:scale-[1.02]"
          >
            Lihat Semua Project
            <IconArrowUpRight
              size={20}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="mb-12 flex gap-3 overflow-x-auto pb-2">
          {CATEGORIES.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-2xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "border-(--accent) bg-(--accent) text-black shadow-lg"
                    : "border-gray-200 bg-white text-gray-600 hover:border-[#e2bd69] hover:text-[#9a7028]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    loading="lazy"
                    className="h-75 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-gray-900 backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-black/55 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label={`Lihat detail ${project.title}`}
                    onClick={() => setSelectedProject(project)}
                    className="absolute right-5 top-5 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white/90 text-gray-900 opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-(--accent) group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <IconArrowUpRight size={22} />
                  </button>

                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="mb-3 flex items-center gap-2 text-sm text-gray-200">
                      <IconMapPin size={16} />
                      {project.location}
                    </div>
                    <h3 className="text-2xl font-bold leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {project.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.scope.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <IconBuilding size={18} />
                      Project Premium
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="group/button flex items-center gap-2 text-sm font-semibold text-gray-900 transition-colors hover:text-[#9a7028]"
                    >
                      Detail
                      <IconArrowUpRight
                        size={18}
                        className="transition-transform group-hover/button:translate-x-1"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-gray-200 bg-white p-10 text-center">
            <p className="text-2xl font-bold text-gray-900">
              Belum ada project untuk kategori ini.
            </p>
            <p className="mt-2 text-gray-500">
              Coba pilih kategori lain atau lihat semua project.
            </p>
          </div>
        )}

        <div className="mt-16 flex flex-col gap-6 rounded-3xl border border-gray-100 bg-white px-7 py-7 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              Punya referensi desain sendiri?
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-gray-500">
              Kirim contoh konsep atau kebutuhan ruang Anda. Kami bantu
              terjemahkan menjadi scope pekerjaan yang realistis.
            </p>
          </div>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-3 rounded-2xl bg-(--accent) px-7 py-4 font-semibold text-black no-underline shadow-lg transition-all duration-300 hover:bg-[#e2bd69] hover:scale-[1.02]"
          >
            Konsultasi Gratis
            <IconArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-80 flex items-center justify-center px-5 py-8">
          <button
            type="button"
            aria-label="Tutup detail project"
            onClick={() => setSelectedProject(null)}
            className="absolute inset-0 h-full w-full bg-black/70 backdrop-blur-md"
          />

          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="grid md:grid-cols-[1.1fr_0.9fr]">
              <img
                src={selectedProject.image.src}
                alt={selectedProject.title}
                className="h-72 w-full object-cover md:h-full"
              />

              <div className="overflow-y-auto p-6 sm:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <span className="rounded-full bg-(--accent-soft) px-4 py-2 text-sm font-semibold text-[#7a5a1f]">
                    {selectedProject.category}
                  </span>
                  <button
                    type="button"
                    aria-label="Tutup detail project"
                    onClick={() => setSelectedProject(null)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-900 hover:text-white"
                  >
                    <IconX size={18} />
                  </button>
                </div>

                <h2 className="text-3xl font-extrabold leading-tight text-gray-900">
                  {selectedProject.title}
                </h2>

                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-500">
                  <IconMapPin size={17} />
                  {selectedProject.location}
                </div>

                <p className="mt-6 leading-relaxed text-gray-600">
                  {selectedProject.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {selectedProject.scope.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-(--accent-soft) px-4 py-2 text-sm font-semibold text-[#7a5a1f]"
                    >
                      <IconCheck size={15} />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Tahun
                    </p>
                    <p className="mt-1 font-bold text-gray-900">
                      {selectedProject.year}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-gray-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                      Kualitas
                    </p>
                    <p className="mt-1 font-bold text-gray-900">Premium</p>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-(--accent) px-6 py-4 font-bold text-black no-underline transition-colors hover:bg-[#e2bd69]"
                >
                  Konsultasikan Project Serupa
                  <IconArrowUpRight size={19} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
