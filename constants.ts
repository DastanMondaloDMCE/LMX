
import { BentoItem, ClientLogo, FooterLink } from './types';

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: '1',
    title: 'Enterprise Architecture',
    category: 'Service',
    description: 'Scalable infrastructure for global demand.',
    image: 'https://picsum.photos/seed/tech1/800/600',
    size: 'large',
    link: '#'
  },
  {
    id: '2',
    title: 'Nexus Flow',
    category: 'Product',
    description: 'Next-gen workflow automation.',
    image: 'https://picsum.photos/seed/tech2/400/300',
    size: 'small',
    link: '#'
  },
  {
    id: '3',
    title: 'Global Fintech Expansion',
    category: 'Case Study',
    description: 'How we scaled a startup to $1B.',
    image: 'https://picsum.photos/seed/tech3/400/300',
    size: 'small',
    link: '#'
  },
  {
    id: '4',
    title: 'Cloud Optimization',
    category: 'Service',
    description: 'Reducing operational costs by 40% through intelligent resource management.',
    image: 'https://picsum.photos/seed/tech4/800/400',
    size: 'medium',
    link: '#'
  },
  {
    id: '5',
    title: 'AI Strategy 2024',
    category: 'Case Study',
    description: 'Deploying LLMs for enterprise customer support.',
    image: 'https://picsum.photos/seed/tech5/400/600',
    size: 'medium',
    link: '#'
  },
  {
    id: '6',
    title: 'Design Systems',
    category: 'Service',
    description: 'Cohesive branding across digital touchpoints.',
    image: 'https://picsum.photos/seed/tech6/400/300',
    size: 'small',
    link: '#'
  },
  {
    id: '7',
    title: 'E-commerce Engine',
    category: 'Product',
    description: 'High-performance retail experiences.',
    image: 'https://picsum.photos/seed/tech7/400/300',
    size: 'small',
    link: '#'
  },
  {
    id: '8',
    title: 'Security Audits',
    category: 'Service',
    description: 'Hardening legacy systems for modern threats.',
    image: 'https://picsum.photos/seed/tech8/400/300',
    size: 'small',
    link: '#'
  },
  {
    id: '9',
    title: 'Sustainable Tech',
    category: 'Case Study',
    description: 'Building the greenest data center in Scandinavia.',
    image: 'https://picsum.photos/seed/tech9/800/600',
    size: 'large',
    link: '#'
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: '1', name: 'Stellar', logo: 'https://cdn.worldvectorlogo.com/logos/stellar-1.svg' },
  { id: '2', name: 'Vercel', logo: 'https://cdn.worldvectorlogo.com/logos/vercel.svg' },
  { id: '3', name: 'OpenAI', logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg' },
  { id: '4', name: 'Airbnb', logo: 'https://cdn.worldvectorlogo.com/logos/airbnb-2-1.svg' },
  { id: '5', name: 'Slack', logo: 'https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg' },
  { id: '6', name: 'Notion', logo: 'https://cdn.worldvectorlogo.com/logos/notion-2.svg' },
];

export const FOOTER_SITEMAP: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Services',
    links: [
      { label: 'Strategy', href: '#' },
      { label: 'Branding', href: '#' },
      { label: 'Development', href: '#' },
      { label: 'Marketing', href: '#' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ]
  }
];
