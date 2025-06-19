export interface Brand {
  id: string;
  name: string;
  tagline: string;
  color: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  icon: string;
}

export interface EmissionData {
  category: string;
  value: number;
  target: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

export interface ShowcaseProject {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

export interface StatPanel {
  title: string;
  value: number;
  unit: string;
  change: number;
  trend: 'positive' | 'negative';
  data: number[];
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  features: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}