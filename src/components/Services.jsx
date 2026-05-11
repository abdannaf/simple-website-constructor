import { useState, useRef, useCallback, useEffect } from 'react';
import { IconBuilding, IconTools, IconWall, IconCrane, IconCircleArrowRight, IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const baseServices = [
  { icon: <IconBuilding size={32} stroke={1.5} />, title: "Residential", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua." },
  { icon: <IconTools size={32} stroke={1.5} />, title: "Interior Designs", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua." },
  { icon: <IconWall size={32} stroke={1.5} />, title: "Structural Repair", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua." },
  { icon: <IconCrane size={32} stroke={1.5} />, title: "Heavy Construction", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloremagna aliqua." },
];

const services = [...baseServices, ...baseServices, ...baseServices];
const TOTAL = baseServices.length;
const GAP = 20;

function getVisible() {
  if (typeof window === 'undefined') return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export default function Services() {
  const [visible, setVisible] = useState(getVisible);
  const [current, setCurrent] = useState(TOTAL);
  const [animated, setAnimated] = useState(true);

  const currentRef = useRef(TOTAL);
  const isResetting = useRef(false);

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    function handleResize() {
      const next = getVisible();
      setVisible((prev) => {
        if (prev !== next) {
          setAnimated(false);
          setCurrent(TOTAL);
          currentRef.current = TOTAL;
          return next;
        }
        return prev;
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function slideTo(next) {
    if (isResetting.current) return;
    setAnimated(true);
    setCurrent(next);
  }

  function handleTransitionEnd() {
    if (isResetting.current) return;

    const c = currentRef.current;
    let resetTo = null;

    if (c >= TOTAL * 2) resetTo = c - TOTAL;
    else if (c < TOTAL) resetTo = c + TOTAL;

    if (resetTo !== null) {
      isResetting.current = true;

      // Step 1: matikan transisi
      setAnimated(false);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // Step 2: pindah posisi tanpa animasi
          setCurrent(resetTo);
          currentRef.current = resetTo;

          requestAnimationFrame(() => {
            // Step 3: hidupkan transisi kembali
            setAnimated(true);
            isResetting.current = false;
          });
        });
      });
    }
  }

  const activeIndex = current + 1;
  const cardWidth = `calc(${100 / visible}% - ${(visible - 1) * GAP / visible}px)`;
  const offset = `calc(-${current * (100 / visible)}% - ${current * GAP / visible}px)`;

  return (
    <section id="Services" className="py-16 sm:py-20 px-4 sm:px-10 md:px-16 overflow-hidden">

      <div className="text-center mb-10 max-w-xl mx-auto">
        <h1 className="leading-tight text-3xl sm:text-4xl font-bold">We Provide Services</h1>
        <p className="leading-relaxed text-base text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(${offset})`,
            transition: animated ? 'transform 500ms ease-in-out' : 'none',
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {services.map((service, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                style={{ minWidth: cardWidth }}
                className={`flex flex-col gap-4 p-5 sm:p-6 rounded-2xl border-2 transition-colors duration-300 bg-white
                  ${isActive ? 'border-amber-400' : 'border-gray-200'}`}
              >
                <span className="text-gray-500">{service.icon}</span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.desc}</p>
                <button className={`flex items-center justify-between px-4 py-3 rounded-lg border-2 border-amber-400 font-semibold text-sm transition-colors
                  ${isActive ? 'bg-amber-400 text-gray-900' : 'bg-transparent text-gray-900 hover:bg-amber-50'}`}>
                  Get Start
                  <IconCircleArrowRight size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={() => slideTo(current - 1)}
          className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center hover:bg-amber-200 transition-colors"
        >
          <IconArrowLeft size={18} />
        </button>
        <button
          onClick={() => slideTo(current + 1)}
          className="w-10 h-10 rounded-full bg-amber-400 text-amber-900 flex items-center justify-center hover:bg-amber-500 transition-colors"
        >
          <IconArrowRight size={18} />
        </button>
      </div>

    </section>
  );
}