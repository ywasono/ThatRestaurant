export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Dumplings' | 'Seafood' | 'Stir-fry' | 'Chef Specials';
  isHero?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface OpeningHours {
  day: string;
  hours: string;
  isClosed?: boolean;
}
