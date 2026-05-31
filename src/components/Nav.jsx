import { useEffect, useState } from "react";
import {
  IconArrowRight,
  IconBuildingCommunity,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

const NAV_LINKS = [
  { label: "Home", href: "#welcome" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
];

export default function DexloryNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.replace("#", ""))
    ).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visibleEntry) return;

        const nextActive = NAV_LINKS.find(
          (link) => link.href === `#${visibleEntry.target.id}`
        );

        if (nextActive) setActive(nextActive.label);
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-0 z-50 w-full px-4 sm:px-6">
        <div
          className={`mx-auto max-w-7xl rounded-3xl border transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-[#101218]/90 shadow-[0_14px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
              : "border-white/10 bg-black/20 backdrop-blur-xl"
          }`}
        >
          <div className="flex h-18 items-center justify-between px-4 sm:px-6">
            <a
              href="#welcome"
              onClick={closeMenu}
              className="group flex items-center gap-3 no-underline"
              aria-label="Dexlory home"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400 text-black shadow-lg shadow-amber-400/20 transition-transform duration-300 group-hover:-translate-y-0.5">
                <IconBuildingCommunity size={24} stroke={2.2} />
              </span>

              <span className="leading-none">
                <span className="block text-xl font-black tracking-tight text-white sm:text-2xl">
                    Nusa Build
                </span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.32em] text-white/45">
                Kontraktor
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-8 lg:flex">
              <ul className="flex items-center gap-2 list-none">
                {NAV_LINKS.map((link) => {
                  const isActive = active === link.label;

                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={() => setActive(link.label)}
                        className={`rounded-2xl px-5 py-2.5 text-sm font-semibold tracking-wide no-underline transition-all duration-300 ${
                          isActive
                            ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20"
                            : "text-gray-300 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white no-underline transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-400 hover:text-black"
              >
                Start Project
                <IconArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white backdrop-blur-xl transition-colors hover:bg-white/12 lg:hidden"
            >
              {menuOpen ? <IconX size={23} /> : <IconMenu2 size={23} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-60 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        } transition-all duration-300`}
      >
        <button
          type="button"
          aria-label="Tutup menu"
          onClick={closeMenu}
          className="absolute inset-0 h-full w-full bg-black/70 backdrop-blur-xl"
        />

        <aside
          id="mobile-menu"
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col border-l border-white/10 bg-[#101218] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <div>
              <p className="text-2xl font-black text-white">NusaBuild</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/40">
                Kontraktor
              </p>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Tutup menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/6 text-white transition-colors hover:bg-white/12"
            >
              <IconX size={20} />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-2 p-6">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActive(link.label);
                    closeMenu();
                  }}
                  className={`flex items-center justify-between rounded-2xl px-5 py-4 text-base font-semibold no-underline transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400 text-black"
                      : "bg-white/4 text-white hover:bg-white/8"
                  }`}
                >
                  {link.label}
                  <IconArrowRight size={18} />
                </a>
              );
            })}
          </div>

          <div className="border-t border-white/10 p-6">
            <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
                Ready to Build?
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-white">
                Konsultasikan project Anda dengan tim kami.
              </h2>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 text-sm font-bold text-black no-underline transition-colors hover:bg-white"
              >
                Contact Us
                <IconArrowRight size={17} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
