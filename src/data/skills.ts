export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    skills: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'AI / Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'LLMs', 'Computer Vision', 'OCR']
  },
  {
    name: 'Frameworks',
    skills: ['Flask', 'React', 'Tailwind CSS']
  },
  {
    name: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'Docker', 'Ollama', 'Odoo']
  },
  {
    name: 'Databases',
    skills: ['[PLACEHOLDER_DB_1]', '[PLACEHOLDER_DB_2]']
  }
];
