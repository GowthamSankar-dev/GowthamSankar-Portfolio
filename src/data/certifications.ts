export interface Certification {
  id: string;
  name: string;
  organization: string;
  date: string;
  credentialId?: string;
  verificationLink?: string;
}

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'CCNA: Introduction to Networks',
    organization: 'Cisco Networking Academy / IFET College of Engineering',
    date: '21 June 2025',
    verificationLink: 'https://drive.google.com/file/d/12u6To772sdXuCaNSJ0L0a3EQm74gtgdt/view?usp=sharing'
  },
  {
    id: 'cert-2',
    name: 'Drone Technology Workshop – “Build & Fly Your Own Drone”',
    organization: 'AIC-PECF / Puducherry Technological University',
    date: '03–06 July 2024',
    verificationLink: 'https://drive.google.com/file/d/1ZkD6nzAcIJRGAsR__sMl_efCfmHLtKEc/view?usp=sharing'
  }
];
