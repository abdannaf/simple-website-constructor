import { useCallback, useEffect, useRef, useState } from "react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconQuote,
  IconStarFilled,
} from "@tabler/icons-react";

const TESTIMONIALS = [
  {
    initials: "BS",
    name: "Budi Santoso",
    role: "Pemilik Rumah",
    project: "Residential",
    rating: 5,
    testimonial:
      "Hasil pengerjaannya rapi dan sesuai ekspektasi. Yang paling saya suka, progress selalu dijelaskan jadi tidak perlu menebak-nebak.",
  },
  {
    initials: "AP",
    name: "Andi Pratama",
    role: "Owner Cafe",
    project: "Renovation",
    rating: 5,
    testimonial:
      "Timeline jelas dari awal. Renovasi cafe selesai tepat waktu dan detail finishing-nya terasa jauh lebih premium.",
  },
  {
    initials: "SW",
    name: "Sarah Wijaya",
    role: "Interior Client",
    project: "Interior",
    rating: 5,
    testimonial:
      "Timnya sangat membantu memilih material. Ruang keluarga kami sekarang terasa lebih hangat, rapi, dan nyaman dipakai setiap hari.",
  },
  {
    initials: "MJ",
    name: "Michael Jonathan",
    role: "Property Investor",
    project: "Commercial",
    rating: 5,
    testimonial:
      "Komunikasinya profesional, dokumentasi progress lengkap, dan hasil akhir bangunan sesuai standar yang kami butuhkan.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const active = TESTIMONIALS[current];

  const nextSlide = useCallback(() => {
    setCurrent((value) => (value + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((value) =>
      value === 0 ? TESTIMONIALS.length - 1 : value - 1
    );
  }, []);

  useEffect(() => {
    const interval = window.setInterval(nextSlide, 6000);

    return () => window.clearInterval(interval);
  }, [nextSlide]);

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event) => {
    const delta = touchStartX.current - event.changedTouches[0].screenX;

    if (delta > 50) nextSlide();
    if (delta < -50) prevSlide();
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-28 overflow-hidden bg-(--bg-warm) py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-7 lg:px-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#ead7a9] bg-(--accent-soft) px-4 py-2 text-sm font-semibold text-[#7a5a1f]">
              <span className="h-2 w-2 rounded-full bg-(--accent)" />
              Testimoni Client
            </div>

            <h2 className="text-4xl font-black leading-tight text-[#1f1f1f] md:text-5xl">
              Cerita client setelah project selesai.
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-[#5e5e5e] lg:justify-self-end">
            Review ini merangkum hal yang paling sering dicari client:
            komunikasi jelas, hasil rapi, dan project berjalan sesuai rencana.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_420px]">
          <div
            className="relative overflow-hidden rounded-3xl bg-(--bg-dark) p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:p-8 lg:p-10"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <IconQuote
              size={84}
              stroke={1.2}
              className="absolute right-8 top-8 text-white/10"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-1">
                {Array.from({ length: active.rating }).map((_, index) => (
                  <IconStarFilled
                    key={index}
                    size={20}
                    className="text-(--accent)"
                  />
                ))}
              </div>

              <p className="mt-8 max-w-3xl text-2xl font-semibold leading-relaxed sm:text-3xl">
                "{active.testimonial}"
              </p>

              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-(--accent) text-lg font-black text-black">
                    {active.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{active.name}</h3>
                    <p className="mt-1 text-sm text-white/60">
                      {active.role} - {active.project}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    aria-label="Testimoni sebelumnya"
                    onClick={prevSlide}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white hover:text-black"
                  >
                    <IconArrowLeft size={20} />
                  </button>
                  <button
                    type="button"
                    aria-label="Testimoni berikutnya"
                    onClick={nextSlide}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--accent) text-black transition-colors hover:bg-white"
                  >
                    <IconArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {TESTIMONIALS.map((testimonial, index) => {
              const selected = index === current;

              return (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setCurrent(index)}
                  aria-pressed={selected}
                  className={`flex items-center gap-4 rounded-[18px] border p-4 text-left transition-all duration-300 ${
                    selected
                      ? "border-amber-300 bg-white shadow-xl"
                      : "border-[#e5dfd2] bg-white/70 hover:border-amber-200 hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black ${
                      selected
                        ? "bg-(--accent) text-black"
                        : "bg-[#f2eadb] text-[#8b6a3e]"
                    }`}
                  >
                    {testimonial.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-bold text-gray-900">
                      {testimonial.name}
                    </span>
                    <span className="mt-1 block text-sm text-gray-500">
                      {testimonial.project}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-[18px] bg-white p-5">
            <p className="text-3xl font-black text-gray-900">4.9/5</p>
            <p className="mt-2 text-sm text-gray-500">Rata-rata kepuasan client</p>
          </div>
          <div className="rounded-[18px] bg-white p-5">
            <p className="text-3xl font-black text-gray-900">150+</p>
            <p className="mt-2 text-sm text-gray-500">Client sudah dilayani</p>
          </div>
          <div className="rounded-[18px] bg-white p-5">
            <p className="text-3xl font-black text-gray-900">On-time</p>
            <p className="mt-2 text-sm text-gray-500">Progress dikawal terjadwal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
