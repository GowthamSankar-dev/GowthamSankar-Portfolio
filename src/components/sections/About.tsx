import { Section } from '../ui/Section';
import { aboutData } from '../../data/about';

export function About() {
  return (
    <Section id="about" className="bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-wrap">
              {aboutData.aboutMe}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
