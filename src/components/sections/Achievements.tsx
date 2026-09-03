import { Award, CheckCircle2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card, CardContent } from '../ui/Card';
import { achievements } from '../../data/achievements';
import { certifications } from '../../data/certifications';

export function Achievements() {
  return (
    <Section id="achievements" className="bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-16">
          
          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Certifications</h2>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg leading-tight mb-1">{cert.name}</h3>
                      <p className="text-sm text-foreground/80 font-medium mb-1">{cert.organization}</p>
                      <p className="text-sm text-muted-foreground">{cert.date}</p>
                      
                      {(cert.credentialId || cert.verificationLink) && (
                        <div className="mt-3 flex flex-wrap gap-3 text-xs">
                          {cert.credentialId && (
                            <span className="text-muted-foreground">ID: {cert.credentialId}</span>
                          )}
                          {cert.verificationLink && (
                            <a
                              href={cert.verificationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline font-medium"
                            >
                              Verify Credential
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Achievements & Awards</h2>
            <div className="space-y-6">
              {achievements.map((achieve) => (
                <Card key={achieve.id} className="border-border hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="mt-1 bg-accent p-2 rounded-full text-accent-foreground">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h3 className="font-semibold text-lg leading-tight">{achieve.title}</h3>
                        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap bg-secondary px-2 py-0.5 rounded-full">
                          {achieve.category}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{achieve.date}</p>
                      <p className="text-sm text-foreground/90">{achieve.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}
