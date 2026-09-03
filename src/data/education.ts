export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  cgpa?: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    id: 'bachelors_1',
    degree: 'Bachelor of Technology in Artificial Intelligence and Machine Learning',
    institution: 'IFET College of Engineering',
    duration: '2022 - 2026',
    cgpa: '8.05',
    coursework: [

  'Artificial Intelligence',

  'Machine Learning',

  'Deep Learning',

  'Data Science',

  'Natural Language Processing',

  'Data Structures',

  'Database Management Systems',

  'Big Data Analytics',

  'Data Exploration and Visualization',

  'Cloud Computing'
]
  }
];
