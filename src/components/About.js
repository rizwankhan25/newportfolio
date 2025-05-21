import Button from './ui/Button';

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text text-transparent">
              About Us
            </span>
          </h1>
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 bg-clip-text">
              About Me
            </span>
          </h2>
          
          <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 shadow-xl">
            <p className=" leading-relaxed mb-4">
            I’m a passionate Full Stack Developer skilled in crafting modern, responsive, and user-friendly web applications. With hands-on experience in both frontend and backend development, I specialize in building full-stack solutions using technologies like <strong>HTML</strong>, <strong>CSS</strong>,<strong>Bootstrap</strong> , <strong>JavaScript</strong>, <strong>React.js</strong> , <strong>Next.js</strong>, and backend tools like <strong>Node.js</strong>, <strong>PHP</strong>, and the <strong>CodeIgniter</strong> framework.
            </p>
            <p className="leading-relaxed mb-4">
            I take pride in writing clean, maintainable code and translating ideas into functional digital experiences. Whether it’s designing an intuitive UI or architecting a robust backend, I enjoy every step of the development process.
            </p>
            <p className="leading-relaxed mb-8">
            My journey in MERN Stack web development has taught me the importance of continuous learning and adapting to the latest tools and trends. I strive to build solutions that are not only functional but also scalable and efficient.
            </p>
            
            {/* Resume Button */}
            <div className="flex justify-center">
              <Button
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 