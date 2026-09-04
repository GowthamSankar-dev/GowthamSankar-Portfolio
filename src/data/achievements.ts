export interface Achievement {
  id: string;
  title: string;
  category: 'Competition' | 'Hackathon' | 'Award' | 'Academic' | 'Technical' | 'Conference';
  date: string;
  description: string;
  verificationLink?: string;
}

export const achievements: Achievement[] = [
  {
    id: 'ach-1',
    title: 'First Prize – Paper Presentation',
    category: 'Award',
    date: '12 September 2024',
    description: 'Secured First Prize in the Paper Presentation event at the National Conference on Advancement in Artificial Intelligence and Emerging Trends (NCAIAET’24) organized by Sri Sairam Engineering College.',
    verificationLink: 'https://drive.google.com/file/d/1bwdEehgYg4i6HobFrubfikLdBfNlRvcH/view?usp=sharing'
  }
];
