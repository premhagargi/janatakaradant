export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: 'Karadant' | 'Laddu' | 'Barfi' | 'Special';
  sizes: string[];
  ingredients: string[];
  nutrition: { [key: string]: string };
  rating: number;
  reviewCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatarUrl: string;
  rating: number;
  text: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
