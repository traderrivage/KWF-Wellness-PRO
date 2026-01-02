
import React from 'react';
import { NavItem, Testimonial, PricingPlan, ServiceItem } from './types';

export const COLORS = {
  purple: '#4B0082',
  gold: '#D4AF37',
  offWhite: '#FAFAFA'
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#/' },
  { label: 'Services', href: '#/services' },
  { label: 'About', href: '#/about' },
  { label: 'Pricing', href: '#/pricing' },
  { label: 'Get Started', href: '#/get-started' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Elizabeth W.",
    initials: "WE",
    text: `Absolutely love my stretch sessions with the practitioner, King! It has helped me immensely as often don’t allocate enough time to stretching. I always look forward to my sessions, highly recommend!`
  },
  {
    name: "Layla R.",
    initials: "LR",
    text: `I mean no disrespect to the rest of the team, but King is truly my favorite! He brings something special to every session it’s not just a stretch with him, it’s a full mind-body connection. You can tell he has a real gift for what he does. His presence, energy, and intention take the experience to another level. 100 out of 100. Thank you for finding and having someone like him on the team!.`
  },
  {
    name: "John M.",
    initials: "JM",
    text: `King was absolutely phenomenal! My wife and I both had sessions today. Very knowledgeable and extremely skilled. We both felt great after the sessions.... Thank you. King`
  }
];

export const FAQS = [
  {
    question: "What should I wear to a session?",
    answer: "For Stretch and Movement therapy, please wear comfortable athletic clothing that allows for a full range of motion. For Massage therapy, traditional draping is used."
  },
  {
    question: "How long does it take to see results?",
    answer: "Most clients feel an immediate 'lightness' after one session. However, structural changes and long-term pain relief typically require 4-8 weeks of consistent weekly sessions."
  },
  {
    question: "Do you travel to clients?",
    answer: "Yes, luxury concierge home sessions are available for select membership tiers and premium single sessions within the service area."
  }
];

export const SERVICE_DETAILS = [
  {
    id: "01",
    title: "Stretch Therapy",
    description: "Stretch Therapy is assisted stretching where you relax and I do the work. This allows your muscles and joints to open up more than stretching on your own. It helps release deep tension, improve flexibility, and increase range of motion safely. Great for people who sit a lot, train hard, or feel tight all the time.",
    bullets: ["Loosen tight muscles", "Improve flexibility", "Reduce joint pressure", "Help your body feel lighter and more mobile"],
    image: "https://lh3.googleusercontent.com/d/1AUEu6PDt3CPkh_115fwJFCuyNWZIeZry=s0",
    buttonLabel: "Book Stretch Session"
  },
  {
    id: "02",
    title: "Massage Therapy",
    description: "Massage Therapy focuses on relieving muscle tension and calming the body. Each session is customized to your needs—whether you’re dealing with stress, soreness, or ongoing muscle pain. This is therapeutic work designed to help your body reset. Best for people who feel worn down, stressed, or sore and need real relief.",
    bullets: ["Relieve muscle pain and soreness", "Reduce stress and tension", "Improve circulation", "Help your body recover and relax"],
    image: "https://lh3.googleusercontent.com/d/1h6xpTl_Zqhhlb0vpwmPEQQR_TjId2pJ-=s0",
    buttonLabel: "Book Massage Session",
    reversed: true
  },
  {
    id: "03",
    title: "Movement Therapy",
    description: "Movement Therapy helps your body move the way it was designed to move. Instead of only treating pain, we look at how you move—walking, standing, bending, and everyday motion. Small movement problems over time can lead to pain, tightness, and injury. Best for people who feel restricted, off-balance, or keep dealing with the same aches over and over.",
    bullets: ["Reduce pain and stiffness", "Improve posture and balance", "Restore natural movement", "Prevent injuries from coming back"],
    image: "https://lh3.googleusercontent.com/d/1pj9dAmbQkPK_1p3L1pbiFnGNw0pwGS1a=s0",
    buttonLabel: "Inquire About Movement"
  }
];

export const MEMBERSHIPS: PricingPlan[] = [
  {
    title: "Maintenance & Alignment",
    frequency: "1x / Week",
    sessions: "4 sessions per month",
    price: "$1,080",
    pricePerSession: "≈ $270 per session",
    tagline: "Ideal for maintaining progress and preventitive care."
  },
  {
    title: "Accelerated Healing",
    frequency: "2x / Week",
    sessions: "8 sessions per month",
    price: "$1,800",
    pricePerSession: "≈ $225 per session",
    tagline: "For those actively working through tension or recovery.",
    highlight: true
  },
  {
    title: "Rapid Transformation",
    frequency: "3x / Week",
    sessions: "12 sessions per month",
    price: "$2,240",
    pricePerSession: "≈ $187 per session",
    tagline: "Limited availability — high-touch care for profound shifts."
  }
];

export const SINGLE_SESSIONS: { stretch: ServiceItem; massage: ServiceItem; combo: ServiceItem } = {
  stretch: {
    name: "Stretch Therapy",
    options: [
      { duration: "30 min", price: "$380" },
      { duration: "60 min", price: "$500" },
      { duration: "90 min", price: "$680" }
    ]
  },
  massage: {
    name: "Massage Therapy",
    options: [
      { duration: "30 min", price: "$380" },
      { duration: "60 min", price: "$500" },
      { duration: "90 min", price: "$680" }
    ]
  },
  combo: {
    name: "Stretch + Massage — Full Body Reset",
    options: [
      { duration: "90 min", price: "$1,060" }
    ]
  }
};
