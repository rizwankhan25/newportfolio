export default function About() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I am a passionate Full Stack Developer with a keen eye for detail and a love for creating elegant solutions. 
              With expertise in modern web technologies, I specialize in building responsive, user-friendly applications 
              that deliver exceptional user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              My journey in web development has equipped me with a strong foundation in both front-end and back-end technologies, 
              allowing me to create seamless, full-stack solutions. I believe in writing clean, maintainable code and staying 
              up-to-date with the latest industry trends and best practices.
            </p>
            
            {/* Resume Button */}
            <div className="flex justify-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gold-400 text-gold-400 font-semibold rounded-lg hover:bg-gold-400/10 transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 