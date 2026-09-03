import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Footer } from '../components/sections/Footer';

export function ProjectCaseStudy() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The detailed case study for this project could not be found.</p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
      </div>
    );
  }

  const { caseStudy } = project;

  return (
    <>
      <Helmet>
        <title>{project.title} | Case Study</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        {/* Minimal Header */}
        <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Link>
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 py-12 md:py-20">
          <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            
            <header className="mb-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.projectType && (
                  <Badge variant="outline" className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {project.projectType}
                  </Badge>
                )}
                <Badge variant="secondary">{project.category}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{project.title}</h1>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="outline">{tech}</Badge>
                ))}
              </div>

              {project.screenshots && project.screenshots.length > 0 && (
                <div className="mb-12">
                  <Carousel images={project.screenshots} title={project.title} />
                </div>
              )}
            </header>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              <section className="mb-10">
                <h2>Overview</h2>
                <p>{caseStudy.overview}</p>
              </section>


              <section className="mb-10">
                <h2>Problem Statement & Motivation</h2>
                <p><strong>Problem:</strong> {caseStudy.problem}</p>
                <p><strong>Motivation:</strong> {caseStudy.motivation}</p>
              </section>

              <section className="mb-10">
                <h2>Objectives</h2>
                <ul>
                  {caseStudy.objectives.map((obj, i) => (
                    <li key={i}>{obj}</li>
                  ))}
                </ul>
              </section>

              <section className="mb-10">
                <h2>System Architecture</h2>
                <p>{caseStudy.architecture}</p>
              </section>

              <section className="mb-10">
                <h2>Implementation</h2>
                <p>{caseStudy.implementation}</p>
              </section>

              <section className="mb-10">
                <h2>My Contribution & Challenges</h2>
                <p><strong>Contribution:</strong> {caseStudy.contribution}</p>
                <p><strong>Challenges:</strong> {caseStudy.challenges}</p>
              </section>

              <section className="mb-10">
                <h2>Results & Future Improvements</h2>
                <p><strong>Results:</strong> {caseStudy.results}</p>
                <p><strong>Future Improvements:</strong> {caseStudy.futureImprovements}</p>
              </section>

            </div>

          </article>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

function Carousel({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border bg-muted/50 group">
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0 flex items-center justify-center p-2">
              <img src={img} alt={`${title} screenshot ${i + 1}`} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
        
        <button 
          onClick={goToPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-primary w-4' : 'bg-primary/50'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
