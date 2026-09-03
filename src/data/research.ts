export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  pdfUrl?: string;
}

export const researchInterests: string[] = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Computer Vision',
  'Natural Language Processing',
  'Robotics'
];

export const publications: Publication[] = [
  {
    id: 'pub-1',
    title: 'AI-Based Purchase Order Automation Using Confidence-Aware Hybrid Extraction and ERP Integration',
    authors: ['Gowtham Sankar', 'Sanchith Shanmugha Sundaram','Muthamizh Kavi E', 'Radhika M','Thulasi P.'],
    venue: 'international journal of innovative science and research technology',
    year: 2026,
    doi: 'https://doi.org/10.38124/ijisrt/26May1130',
    pdfUrl: 'https://www.ijisrt.com/assets/upload/files/IJISRT26MAY1130.pdf'

  }
];
