export interface Achievement {
  id: string;
  title: string;
  category: 'Competition' | 'Hackathon' | 'Award' | 'Academic' | 'Technical' | 'Conference';
  date: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: '[PLACEHOLDER_ACHIEVEMENT_TITLE]',
    category: 'Award',
    date: '[PLACEHOLDER_DATE]',
    description: '[PLACEHOLDER_ACHIEVEMENT_DESCRIPTION]'
  }
];
