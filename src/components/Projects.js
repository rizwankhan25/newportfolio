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
      description: "A full-stack web application to manage products,  You can login by this  email: eve.holt@reqres.in,  password: tailwind",
      technologies: ["Next.js", "Bootstrap", "JavaScript"],
      image: "/images/productmanagementapp.jpeg",
      link: "https://productmanagementapps.netlify.app/login"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      {/* Background decoration */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl">asdfsdf asfsdf </div>
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-14 text-center">
          <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text">
            Featured Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden m-4">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-lg" />
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
          ))}
        </div>
      </div>
    </section>
  );
} 