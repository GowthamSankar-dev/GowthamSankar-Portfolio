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
    name: '[PLACEHOLDER_CERTIFICATION_NAME]',
    organization: '[PLACEHOLDER_ISSUING_ORGANIZATION]',
    date: '[PLACEHOLDER_ISSUE_DATE]',
    credentialId: '[PLACEHOLDER_CREDENTIAL_ID]',
    verificationLink: '[PLACEHOLDER_VERIFICATION_LINK]'
  }
];
