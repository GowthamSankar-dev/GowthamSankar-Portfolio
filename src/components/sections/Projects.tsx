import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Section } from '../ui/Section';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <Section id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.projectType && (
                      <Badge variant="outline" className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {project.projectType}
                      </Badge>
                    )}
                    {project.year && (
                      <Badge variant="outline" className="text-xs font-semibold tracking-wider border-primary/50 text-foreground">
                        {project.year}
                      </Badge>
                    )}
                    <Badge variant="secondary">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <FaGithub className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2 line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-4 border-t">
                <Button asChild className="w-full">
                  <Link to={`/project/${project.id}`}>
                    More Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
