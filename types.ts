
export interface BentoItem {
  id: string;
  title: string;
  category: 'Service' | 'Product' | 'Case Study';
  description: string;
  image: string;
  size: 'small' | 'medium' | 'large';
  link: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
