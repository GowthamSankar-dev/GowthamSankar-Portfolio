import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/sections/Navbar';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Education } from '../components/sections/Education';
import { Skills } from '../components/sections/Skills';
import { Projects } from '../components/sections/Projects';
import { Research } from '../components/sections/Research';
import { Experience } from '../components/sections/Experience';
import { Achievements } from '../components/sections/Achievements';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/sections/Footer';
import { aboutData } from '../data/about';

export function Home() {
  return (
    <>
      <Helmet>
        <title>{aboutData.name} | {aboutData.headline}</title>
        <meta name="description" content={aboutData.summary} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Research />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
