
export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  name: string;
  initials: string;
  text: string;
}

export interface PricingPlan {
  title: string;
  frequency: string;
  sessions: string;
  price: string;
  pricePerSession: string;
  tagline: string;
  highlight?: boolean;
}

export interface ServiceItem {
  name: string;
  options: { duration: string; price: string }[];
}
