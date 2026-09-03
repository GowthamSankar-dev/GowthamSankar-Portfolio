import { ArrowRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { aboutData } from '../../data/about';
import { contactData } from '../../data/contact';

export function Hero() {
  return (
    <Section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
              {aboutData.name}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              {aboutData.headline}
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {aboutData.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={aboutData.resumeUrl} download>
                <Download className="h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href={`mailto:${contactData.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        {/* Optional decorative element or image space */}
        <div className="flex-1 hidden lg:flex justify-end">
          <div className="relative w-72 h-72 xl:w-96 xl:h-96 rounded-full bg-gradient-to-tr from-primary/20 to-secondary border border-border shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-3xl">
            <img src="/Profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </Section>
  );
}
