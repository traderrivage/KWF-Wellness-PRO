
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
    answer: "For Stretch and Movement therapy, please wear comfortable athletic clothing that allows for a full range of motion. For Kingdom Massage, traditional draping is used."
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
    description: "Using PNF (Proprioceptive Neuromuscular Facilitation) and passive stretching techniques, we target the deep fascial lines that limit your movement. This isn't just 'stretching'—it's a systematic neurological reset of your muscle length.",
    bullets: ["Increased Joint Space", "Reduced Nerve Impingement", "Enhanced Athletic Range"],
    image: "https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=800",
    buttonLabel: "Book Stretch Session"
  },
  {
    id: "02",
    title: "Kingdom Massage",
    description: "A high-pressure, therapeutic modality designed to break down adhesions and stimulate lymphatic drainage. We focus on the 'Kingdom'—the core and spine—ensuring the center of your body is free to support your extremities.",
    bullets: ["Deep Tissue Release", "Chronic Pain Management", "Parasympathetic Reset"],
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800",
    buttonLabel: "Book Kingdom Massage",
    reversed: true
  },
  {
    id: "03",
    title: "Movement Therapy",
    description: "The final stage of integration. Once the body is loose and released, we teach you how to use it. Movement therapy focuses on biomechanical efficiency, postural alignment, and functional strength.",
    bullets: ["Postural Correction", "Biomechanical Education", "Injury Prevention"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
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
    name: "Kingdom Massage",
    options: [
      { duration: "30 min", price: "$420" },
      { duration: "60 min", price: "$560" },
      { duration: "90 min", price: "$740" }
    ]
  },
  combo: {
    name: "Stretch + Massage — Full Body Reset",
    options: [
      { duration: "90 min", price: "$1,060" }
    ]
  }
};
