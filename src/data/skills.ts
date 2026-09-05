export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming & Web',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS']
  },
  {
    name: 'AI / Machine Learning',
    skills: ['Machine Learning', 'Deep Learning', 'LLMs', 'Computer Vision', 'OCR','NLP']
  },
  {
    name: 'Frameworks & Libraries',
    skills: ['Flask','Django','FastAPI', 'React', 'Tailwind CSS','PyTorch','OpenCV']
  },
  {
    name: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'Docker', 'Ollama', 'Odoo','Power BI']
  },
  {
    name: 'Databases',
    skills: ['SQLite' ,'PostgreSQL']
  }
];
