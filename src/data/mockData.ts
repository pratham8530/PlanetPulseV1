import { Brand, EmissionData, ShowcaseProject, StatPanel, AITool, Testimonial } from '../types';

export const brands: Brand[] = [
  {
    id: 'ecorp',
    name: 'ECorp',
    tagline: 'Sustainable Electronics',
    color: 'emerald',
    theme: {
      primary: '#10b981',
      secondary: '#059669',
      accent: '#34d399',
      background: '#ecfdf5',
      text: '#064e3b'
    },
    icon: 'Zap'
  },
  {
    id: 'icorp',
    name: 'ICorp',
    tagline: 'Industrial Innovation',
    color: 'amber',
    theme: {
      primary: '#f59e0b',
      secondary: '#d97706',
      accent: '#fbbf24',
      background: '#fffbeb',
      text: '#92400e'
    },
    icon: 'Factory'
  },
  {
    id: 'agency',
    name: 'The Agency',
    tagline: 'Creative Data Lab',
    color: 'red',
    theme: {
      primary: '#ef4444',
      secondary: '#dc2626',
      accent: '#f87171',
      background: '#fef2f2',
      text: '#991b1b'
    },
    icon: 'Rocket'
  }
];

export const emissionData: EmissionData[] = [
  { category: 'Refurbishment', value: 450, target: 500, unit: 'kgCO₂e/m²', trend: 'down' },
  { category: 'New Build', value: 580, target: 600, unit: 'kgCO₂e/m²', trend: 'up' },
  { category: 'Operations', value: 320, target: 400, unit: 'kgCO₂e/m²', trend: 'down' },
  { category: 'Transport', value: 150, target: 200, unit: 'kgCO₂e/m²', trend: 'stable' }
];

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: '1',
    title: 'Norway – Sopra Kickoff 2025',
    location: 'Oslo, Norway',
    description: 'Comprehensive sustainability assessment for tech company expansion',
    image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Technology',
    date: '2025-01-15'
  },
  {
    id: '2',
    title: 'Green Manufacturing Initiative',
    location: 'Berlin, Germany',
    description: 'Industrial carbon footprint reduction program',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Manufacturing',
    date: '2024-12-20'
  },
  {
    id: '3',
    title: 'Creative Carbon Dashboard',
    location: 'London, UK',
    description: 'Real-time emissions tracking for creative agencies',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Creative',
    date: '2024-11-30'
  }
];

export const statPanels: StatPanel[] = [
  {
    title: 'Carbon Footprint',
    value: 1247,
    unit: 'tCO₂e',
    change: -12.5,
    trend: 'positive',
    data: [1420, 1380, 1340, 1290, 1247]
  },
  {
    title: 'Energy Intensity',
    value: 89.2,
    unit: 'kWh/m²',
    change: -8.3,
    trend: 'positive',
    data: [97.1, 94.8, 92.1, 90.5, 89.2]
  },
  {
    title: 'Total Energy Consumption',
    value: 45680,
    unit: 'kWh',
    change: 3.2,
    trend: 'negative',
    data: [44250, 44890, 45120, 45340, 45680]
  }
];

export const aiTools: AITool[] = [
  {
    id: '1',
    name: 'Carbon Forecast Pro',
    description: 'Advanced AI-powered carbon emission predictions',
    price: 299,
    category: 'Analytics',
    features: ['Real-time forecasting', 'Scenario modeling', 'API integration'],
    popular: true
  },
  {
    id: '2',
    name: 'Sustainability Dashboard Suite',
    description: 'Complete dashboard templates for ESG reporting',
    price: 199,
    category: 'Templates',
    features: ['15+ dashboard templates', 'Custom branding', 'Export tools']
  },
  {
    id: '3',
    name: 'AI Report Generator',
    description: 'Automated sustainability report creation',
    price: 399,
    category: 'Automation',
    features: ['Auto-generation', 'Multi-format export', 'Compliance ready']
  },
  {
    id: '4',
    name: 'Data Analysis Pack',
    description: 'Advanced analytics and visualization tools',
    price: 249,
    category: 'Analytics',
    features: ['Statistical analysis', 'Custom charts', 'Trend detection']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Chief Sustainability Officer',
    company: 'TechGlobal Inc.',
    content: 'Planet PULSE transformed how we track and manage our carbon footprint. The AI insights have helped us reduce emissions by 30%.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Environmental Director',
    company: 'GreenTech Solutions',
    content: 'The platform\'s predictive analytics saved us thousands in compliance costs. Absolutely game-changing for our sustainability goals.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Operations Manager',
    company: 'EcoManufacturing Ltd.',
    content: 'Real-time dashboards and automated reporting have streamlined our ESG processes completely. Highly recommend Planet PULSE.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/3781538/pexels-photo-3781538.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
  }
];