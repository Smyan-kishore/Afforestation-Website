export interface NGO {
  id: string;
  name: string;
  description: string;
  location: string;
  achievements: {
    treesPlanted: number;
    projects: number;
    communityPrograms: number;
  };
  rating: number;
  logo: string;
  upiId: string;
}

export interface FeedbackForm {
  name: string;
  email: string;
  rating: number;
  comment: string;
}

export interface ContactForm {
  name: string;
  email: string;
  mobile: string;
  message: string;
}