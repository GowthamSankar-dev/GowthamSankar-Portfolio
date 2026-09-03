export interface Experience {
  id: string;
  organization: string;
  role: string;
  duration: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    organization: '[PLACEHOLDER_ORGANIZATION_NAME]',
    role: '[PLACEHOLDER_ROLE_TITLE]',
    duration: '[PLACEHOLDER_START_DATE] - [PLACEHOLDER_END_DATE]',
    responsibilities: [
      '[PLACEHOLDER_RESPONSIBILITY_1]',
      '[PLACEHOLDER_RESPONSIBILITY_2]'
    ],
    technologies: ['[PLACEHOLDER_TECH_1]', '[PLACEHOLDER_TECH_2]'],
    achievements: [
      '[PLACEHOLDER_ACHIEVEMENT_1]'
    ]
  }
];
