import { useState, useRef, useCallback } from 'react';
import { IconArrowLeft, IconArrowRight, IconStar } from '@tabler/icons-react';

const baseUsers = [
  { photo: "https://i.pravatar.cc/150?img=11", name: "Larem Jemes", role: "Graphic Design", rating: 5, testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, loctus nec ullamcorper mattis." },
  { photo: "https://i.pravatar.cc/150?img=12", name: "Johan Mickel", role: "Web Development", rating: 5, testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, loctus nec ullamcorper mattis." },
  { photo: "https://i.pravatar.cc/150?img=13", name: "Sarah Connor", role: "UI/UX Designer", rating: 4, testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, loctus nec ullamcorper mattis." },
  { photo: "https://i.pravatar.cc/150?img=14", name: "Mike Johnson", role: "Project Manager", rating: 5, testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, loctus nec ullamcorper mattis." },
];

const users = [...baseUsers, ...baseUsers, ...baseUsers];
const TOTAL = baseUsers.length;
const VISIBLE = 2;

export default function Testimonials() {
  const [current, setCurrent] = useState(TOTAL);
  const [animated, setAnimated] = useState(true);
  const isResetting = useRef(false);

  function slideTo(next) {
    if (isResetting.current) return;
    setAnimated(true);
    setCurrent(next);
  }

  const handleTransitionEnd = useCallback(() => {
    if (isResetting.current) return;

    let resetTo = null;
    if (current >= TOTAL * 2) resetTo = current - TOTAL;
    else if (current < TOTAL) resetTo = current + TOTAL;

    if (resetTo !== null) {
      isResetting.current = true;
      setAnimated(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setCurrent(resetTo);
          requestAnimationFrame(() => {
            setAnimated(true);
            isResetting.current = false;
          });
        });
      });
    }
  }, [current]);

  return (
    <section id='Testimonials' className="py-20 px-4 sm:px-10 md:px-16 bg-[#f0f0f0]">
      <div className="flex flex-col md:flex-row items-start gap-10 md:gap-12">

        {/* Kolom Kiri — Teks */}
        <div className="w-full md:w-2/5 shrink-0">
          <p className="text-gray-500 text-2xl leading-relaxed">
            Testimoni
          </p>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-gray-900 mb-4">
            Apa kata mereka?
          </h2>
          <p className='text-gray-500 text-base leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, nisi.
          </p>
          
        </div>

        {/* Kolom Kanan — Slider */}
        <div className="w-full md:w-3/5 flex flex-col gap-6">

          <div className="overflow-hidden pt-12">
            <div
              className="flex gap-5"
              style={{
                transform: `translateX(calc(-${current * (100 / VISIBLE)}% - ${current * 20 / VISIBLE}px))`,
                transition: animated ? 'transform 500ms ease-in-out' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {users.map((user, i) => (
                <div
                  key={i}
                  style={{ minWidth: `calc(${100 / VISIBLE}% - ${(VISIBLE - 1) * 20 / VISIBLE}px)` }}
                  className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center text-center gap-2 relative"
                >
                  <div className="absolute -top-10">
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white shadow"
                    />
                  </div>

                  <div className="mt-10" />

                  <h3 className="font-bold text-base text-gray-900">{user.name}</h3>
                  <p className="text-gray-400 text-sm">{user.role}</p>

                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <IconStar
                        key={j}
                        size={16}
                        className={j < user.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-gray-300'}
                      />
                    ))}
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed mt-2">{user.testimonial}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-3">
            <button
              onClick={() => slideTo(current - 1)}
              className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center hover:bg-amber-200 transition-colors"
            >
              <IconArrowLeft size={20} />
            </button>
            <button
              onClick={() => slideTo(current + 1)}
              className="w-12 h-12 rounded-full bg-amber-400 text-amber-900 flex items-center justify-center hover:bg-amber-500 transition-colors"
            >
              <IconArrowRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}