import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, Info, Star, Layers, Activity, CheckCircle2, Code2, Workflow, BookOpen, History } from 'lucide-react';
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
                {project.year && (
                  <Badge variant="outline" className="text-sm font-semibold tracking-wider border-primary/50 text-foreground">
                    {project.year}
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

            <div className="space-y-16 mt-16">
              
              {/* Overview */}
              <section className="bg-card border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="bg-primary/10 text-primary p-2 rounded-xl"><Info className="w-6 h-6" /></span>
                  Overview
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                  {caseStudy.overview}
                </p>
              </section>

              {/* Key Features */}
              {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="bg-primary/10 text-primary p-2 rounded-xl"><Star className="w-6 h-6" /></span>
                    Key Features & Capabilities
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseStudy.keyFeatures.map((feature, i) => (
                      <div key={i} className="bg-card border rounded-2xl p-6 hover:shadow-md transition-all hover:border-primary/50 group">
                        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Architecture */}
              {caseStudy.architecture && caseStudy.architecture.length > 0 && (
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="bg-primary/10 text-primary p-2 rounded-xl"><Layers className="w-6 h-6" /></span>
                    Architecture & Implementation
                  </h2>
                  <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-8">
                    {caseStudy.architecture.map((item, i) => (
                      <div key={i} className="relative pl-8 md:pl-10">
                        <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-sm" />
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Data Flow */}
              {caseStudy.dataFlow && (
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="bg-primary/10 text-primary p-2 rounded-xl"><Workflow className="w-6 h-6" /></span>
                    Real-Time Data Flow
                  </h2>
                  <div className="bg-card border rounded-2xl p-6 md:p-8 overflow-x-auto shadow-sm">
                    <pre className="text-sm md:text-base text-muted-foreground font-mono leading-relaxed whitespace-pre font-semibold text-center">
                      {caseStudy.dataFlow}
                    </pre>
                  </div>
                </section>
              )}

              {/* Impact */}
              {caseStudy.impact && caseStudy.impact.length > 0 && (
                <section className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background/10 to-transparent"></div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3 relative z-10">
                    <span className="bg-primary/20 text-primary p-2 rounded-xl"><Activity className="w-6 h-6" /></span>
                    Impact & Capabilities
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 relative z-10">
                    {caseStudy.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Tech Stack */}
              {caseStudy.techStack && caseStudy.techStack.length > 0 && (
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                    <span className="bg-primary/10 text-primary p-2 rounded-xl"><Code2 className="w-6 h-6" /></span>
                    Technology Stack
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {caseStudy.techStack.map((item, i) => (
                      <div key={i} className="flex flex-col bg-card border rounded-2xl p-5 flex-1 min-w-[200px] hover:border-primary/50 transition-colors">
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{item.category}</span>
                        <span className="text-lg font-semibold">{item.technologies}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Research Foundation */}
              {caseStudy.researchFoundation && (
                <section className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden mt-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 relative z-10">
                    <span className="bg-primary/20 text-primary p-2 rounded-xl"><BookOpen className="w-6 h-6" /></span>
                    Model & Research Foundation
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                    {caseStudy.researchFoundation}
                  </p>
                </section>
              )}

              {/* Background */}
              {caseStudy.background && (
                <section className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 relative overflow-hidden mt-12">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3 relative z-10">
                    <span className="bg-primary/20 text-primary p-2 rounded-xl"><History className="w-6 h-6" /></span>
                    Project Background
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed relative z-10">
                    {caseStudy.background}
                  </p>
                </section>
              )}

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
