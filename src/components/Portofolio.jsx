import React from 'react'
import Hero from '../assets/download.jpg'
import portofolio2 from '../assets/portofolio2.jpg'
import portofolio3 from '../assets/portofolio3.jpg'
import portofolio4 from '../assets/portofolio4.jpg'
import portofolio5 from '../assets/portofolio5.jpg'
import portofolio6 from '../assets/portofolio6.jpg'

const projects = [
    {
        gambar: Hero.src,
        title: 'Lorem ipsum dolor sit amet.',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, mollitia.'
    },
    {
        gambar: portofolio2.src,
        title: 'Lorem ipsum dolor sit amet.',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, mollitia.'
    },
    {
        gambar: portofolio3.src,
        title: 'Lorem ipsum dolor sit amet.',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, mollitia.'
    },
    {
        gambar: portofolio4.src,
        title: 'Lorem ipsum dolor sit amet.',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, mollitia.'
    },
    {
        gambar: portofolio5.src,
        title: 'Lorem ipsum dolor sit amet.',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, mollitia.'
    },
    {
        gambar: portofolio6.src,
        title: 'Lorem ipsum dolor sit amet.',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, mollitia.'
    },
]

export default function Portofolio() {
  return (
    <section id="Portofolio" className='py-16 px-4 sm:px-8 md:px-16'>

      {/* Header */}
      <div className='text-center max-w-2xl mx-auto mb-10'>
        <h1 className='text-3xl sm:text-4xl font-bold leading-tight'>
          Portofolio
        </h1>
        <p>Masih ragu dengan jasa kami? Berikut hasil proyek telah kami kerjakan</p>
      </div>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, i) => (
          <div
            key={i}
            className='flex flex-col rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden hover:shadow-md transition-shadow duration-300'
          >
            {/* Gambar */}
            <div className='w-full aspect-video overflow-hidden'>
              <img
                src={project.gambar}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                />
            </div>

            {/* Konten */}
            <div className='p-5 flex flex-col gap-2 flex-1'>
              <h2 className='font-bold text-base sm:text-lg text-gray-900'>{project.title}</h2>
              <p className='text-gray-500 text-sm leading-relaxed'>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}