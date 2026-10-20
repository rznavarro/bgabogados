export interface Lawyer {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  education: string[];
  imageUrl: string;
}

export interface CriminalService {
  id: string;
  title: string;
  description: string;
  whatsappMessage: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface OfficePhoto {
  id: string;
  title: string;
  url: string;
  alt: string;
}
