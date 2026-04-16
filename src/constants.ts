import { Dish, Testimonial, OpeningHours } from './types';

export const DISHES: Dish[] = [
  {
    id: '1',
    name: 'Spicy Crispy Beef',
    description: 'Tender beef strips fried to perfection, tossed in a signature spicy glaze with a hint of sweetness.',
    price: '$28.80',
    image: 'https://i.imgur.com/SBy9236.jpg',
    category: 'Chef Specials',
    isHero: true,
  },
  {
    id: '2',
    name: 'Salt & Pepper Squid',
    description: 'Fresh squid lightly battered and seasoned with our secret salt and pepper mix, tossed with fresh chili and shallots.',
    price: '$26.50',
    image: 'https://i.imgur.com/Jw68tm8.jpg',
    category: 'Seafood',
  },
  {
    id: '3',
    name: 'Pork & Chive Dumplings',
    description: 'Hand-folded dumplings filled with succulent pork and fresh chives, served with aged black vinegar.',
    price: '$18.00',
    image: 'https://i.imgur.com/Lc3Gbjn.jpg',
    category: 'Dumplings',
  },
  {
    id: '4',
    name: 'Salt & Pepper Chicken',
    description: 'Crispy chicken pieces tossed with aromatic spices, fresh chili, and spring onions.',
    price: '$24.50',
    image: 'https://i.imgur.com/rsiPyLZ.jpg',
    category: 'Stir-fry',
  },
  {
    id: '5',
    name: 'Honey King Prawns',
    description: 'Battered king prawns coated in a rich, velvety honey sauce and topped with toasted sesame seeds.',
    price: '$32.00',
    image: 'https://i.imgur.com/W9Hu3Mn.jpg',
    category: 'Seafood',
    isHero: true,
  },
  {
    id: '6',
    name: 'Mapo Tofu',
    description: 'Silken tofu set in a spicy, numbing sauce with minced pork and Sichuan peppercorns.',
    price: '$22.00',
    image: 'https://picsum.photos/seed/mapotofu/800/600',
    category: 'Stir-fry',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah M.',
    text: 'The Spicy Crispy Beef is life-changing. Best late-night spot in Adelaide hands down.',
    rating: 5,
  },
  {
    id: '2',
    name: 'James L.',
    text: 'Authentic flavors and incredible atmosphere. The salt and pepper squid is perfectly crispy.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena R.',
    text: 'Love the late-night vibes. It feels like a hidden gem in the heart of the city.',
    rating: 4,
  },
  {
    id: '4',
    name: 'David K.',
    text: 'Fast service even at 1 AM. The dumplings are always fresh and juicy.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Chloe W.',
    text: 'The perfect place for a post-show meal. High-end feel without being pretentious.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Michael T.',
    text: 'Consistent quality every time. That Restaurant on Gouger is my go-to for Chinese food.',
    rating: 4,
  },
];

export const OPENING_HOURS: OpeningHours[] = [
  { day: 'Monday', hours: '5 pm – 1:30 am' },
  { day: 'Tuesday', hours: '5 pm – 1:30 am' },
  { day: 'Wednesday', hours: 'Closed', isClosed: true },
  { day: 'Thursday', hours: '5 pm – 1:30 am' },
  { day: 'Friday', hours: '5 pm – 2:30 am' },
  { day: 'Saturday', hours: '5 pm – 2:30 am' },
  { day: 'Sunday', hours: '5 pm – 1:30 am' },
];

export const CONTACT_INFO = {
  phone: '0430070595',
  address: 'Gouger St, Adelaide SA 5000',
  mapUrl: 'https://www.google.com/maps/place/That+Restaurant+on+Gouger/@-34.9309012,138.5899403,19z/data=!4m6!3m5!1s0x6ab0cf82fc2d0ae1:0xb9b8ec800c4a6e8a!8m2!3d-34.9308066!4d138.5900476!16s%2Fg%2F11fph3c9yn!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D',
};
