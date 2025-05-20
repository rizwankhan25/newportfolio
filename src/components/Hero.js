import Image from 'next/image';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gold-400 via-gold-300  bg-clip-text">
                  Rizwan Khan
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                Full Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl">
                Crafting elegant solutions to complex problems through clean code and innovative design.
              </p>

              {/* Photo - Mobile Only */}
              <div className="md:hidden flex justify-center mb-12">
                <div className="relative w-72 h-72">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-gold-400 to-gold-300 rounded-full blur-xl opacity-20 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-300 rounded-full animate-spin-slow"></div>
                  
                  {/* Photo container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold-400/30 shadow-2xl">
                    <Image
                      src="/profile.jpg"
                      alt="Rizwan Khan"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <Button href="#projects">
                  View Projects
                </Button>
                <Button href="#contact" className="border-white hover:bg-red-500/10 shadow-md" >
                  Contact Me
                </Button>
                <Button 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer" className='border-white'
                >
                  Resume
                </Button>
              </div>
            </div>

            {/* Photo - Desktop Only */}
            <div className="hidden md:block flex-1 relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-gold-400 to-gold-300 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-300 rounded-full animate-spin-slow"></div>
                
                {/* Photo container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gold-400/30 shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Rizwan Khan"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
} 