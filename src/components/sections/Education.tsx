import { Section } from '../ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { education } from '../../data/education';

export function Education() {
  return (
    <Section id="education">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Education</h2>
          
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                  <CardDescription className="text-base text-foreground font-medium">
                    {edu.institution}
                  </CardDescription>
                  {edu.cgpa && (
                    <div className="mt-2 text-sm font-semibold text-primary">
                      CGPA: {edu.cgpa}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
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
