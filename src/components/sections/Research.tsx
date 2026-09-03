import { FileText, Link as LinkIcon } from 'lucide-react';
import { Section } from '../ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { publications, researchInterests } from '../../data/research';

export function Research() {
  return (
    <Section id="research" className="bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Research & Publications</h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-3">
                {researchInterests.map((interest, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-1.5 text-sm">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Publications</h3>
              {publications.map((pub) => (
                <Card key={pub.id} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-lg leading-tight mb-2">
                          {pub.title}
                        </CardTitle>
                        <CardDescription className="text-base text-foreground/80">
                          {pub.authors.join(', ')}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="whitespace-nowrap">
                        {pub.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-sm font-medium text-primary">
                        {pub.venue}
                      </p>
                      
                      <div className="flex items-center gap-4">
                        {pub.pdfUrl && (
                          <a
                            href={pub.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <FileText className="mr-2 h-4 w-4" />
                            PDF
                          </a>
                        )}
                        {pub.doi && (
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <LinkIcon className="mr-2 h-4 w-4" />
                            DOI
                          </a>
                        )}
                      </div>
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
