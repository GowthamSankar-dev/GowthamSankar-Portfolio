import { Section } from '../ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { experiences } from '../../data/experience';
import { Award } from 'lucide-react';

export function Experience() {
  return (
    <Section id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Experience</h2>
          
          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.id} className="border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <CardDescription className="text-base text-foreground font-medium">
                    {exp.organization}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Responsibilities
                      </h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.responsibilities.map((resp, index) => (
                          <li key={index} className="leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements && exp.achievements.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                          Key Achievements
                        </h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index} className="leading-relaxed">{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="pt-2">
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {exp.proof && (
                      <div className="pt-3 border-t mt-4 flex items-center gap-2 text-sm font-medium">
                        <Award className="w-4 h-4 text-primary" />
                        {exp.proofUrl ? (
                          <a href={exp.proofUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline hover:text-primary/80 transition-colors inline-flex items-center gap-1">
                            {exp.proof}
                          </a>
                        ) : (
                          <span className="text-primary">{exp.proof}</span>
                        )}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
