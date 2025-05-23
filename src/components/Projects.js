'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Projects() {
  const projects = [
    {
      title: "Modern Kitchen Solutions Website",
      description: "A fully responsive and visually engaging website built for Novella Kitchens, a company offering premium modular kitchen solutions. Developed using modern frontend technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "/images/novellakitchen.jpeg",
      link: "https://novellakitchens.com/"
    },
    {
      title: "Premium Alcoholic Beverages Website",
      description: "A sleek and responsive website designed for SG Alcobev, a premium alcoholic beverage company. The site showcases the brand's product range, values, and vision with a modern layout and intuitive user interface.",
      technologies: ["HTML", "SASS", "JavaScript"],
      image: "/images/sg.jpeg",
      link: "https://www.sgalcobev.com/"
    },
    {
      title: "Product Management App",
      description: "A full-stack web application to manage products. You can login with email: eve.holt@reqres.in, password: tailwind.",
      technologies: ["Next.js", "Bootstrap", "JavaScript"],
      image: "/images/productmanagementapp.jpeg",
      link: "https://productmanagementapps.netlify.app/login"
    },
    {
      title: "Dummy Project",
      description: "I have created this website with swiper.js. You can slide for the next page and it will slide like loop. It responsive so you can open it on your phone as well.",
      technologies: ["Html", "CSS", "JavaScript", "Swiper.js"],
      image: "/images/redshofa.jpeg",
      link: "https://rizwankhan25.github.io/website-slide-feature/"
    }
  ];
  

  return (
    
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text">
            Featured Projects
          </span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, ]}
          spaceBetween={30}
          loop={true}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden m-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                  <div className="absolute inset-0 bg-gold-400/10 group-hover:bg-gold-400/20 transition-all duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gold-400 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gold-400/10 text-gold-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
