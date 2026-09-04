export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
  proof?: string;
  proofUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    organization: 'NLC India Limited',
    role: 'Data Analyst Intern',
    duration: 'JAN 2024',
    responsibilities: [
      'Analyzed and processed data to identify patterns, insights, and trends.',
      'Worked with data analysis and visualization to support practical decision-making.'
    ],
    technologies: ['Python', 'Data Analysis', 'Data Visualization'],
    proof: 'Internship Certificate',
    proofUrl: 'https://drive.google.com/file/d/1J4pMS1AUWziLQgQGrIxkrhDP-7dk21pg/view?usp=sharing'
  },
  {
    id: 'exp-2',
    organization: 'MSME-Funded Project',
    role: 'Front-End Developer',
    duration: 'AUG 2025 - SEP 2025',
    responsibilities: [
      'Designed and developed responsive front-end interfaces for the project.',
      'Implemented user-focused web components and integrated them into the project workflow.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    proof: 'Project Git Repository',
    proofUrl: 'https://github.com/DocToYou/doctoyou'
  }
];
