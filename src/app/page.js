import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 ">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Gallery />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
} 