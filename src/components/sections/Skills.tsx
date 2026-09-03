import { Section } from '../ui/Section';
import { skillCategories } from '../../data/skills';
import { Badge } from '../ui/Badge';

export function Skills() {
  return (
    <Section id="skills" className="bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight mb-8">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-semibold border-b pb-2">{category.name}</h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
