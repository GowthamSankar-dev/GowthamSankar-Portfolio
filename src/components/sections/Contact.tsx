import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { contactData } from '../../data/contact';
import { aboutData } from '../../data/about';

export function Contact() {
  return (
    <Section id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I’m always open to new opportunities, research collaborations, and interesting projects. Whether you have a question, want to discuss an idea, or simply want to connect, feel free to reach out. I’ll be happy to get in touch.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
            <Button asChild size="lg" className="gap-2">
              <a href={`mailto:${contactData.email}`}>
                <Mail className="h-5 w-5" /> Say Hello
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={aboutData.resumeUrl} download>
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-12">
            <a href={`mailto:${contactData.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
              <span>{contactData.email}</span>
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{contactData.location}</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 pt-4 border-t mt-12 w-32 mx-auto">
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaGithub className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <FaLinkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
