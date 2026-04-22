import { MenuItem, GalleryItem, Testimonial, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const MENU_CATEGORIES = ['Starters', 'Mains', 'Desserts', 'Drinks'] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Truffle Scallops',
    description: 'Pan-seared scallops with black truffle shavings and parsnip purée.',
    price: '$28',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db76?w=800&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Beef Carpaccio',
    description: 'Thinly sliced Wagyu beef with capers, Parmesan, and arugula.',
    price: '$24',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Dry-Aged Ribeye',
    description: '30-day aged prime ribeye served with roasted bone marrow.',
    price: '$65',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?w=800&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Lobster Risotto',
    description: 'Creamy Arborio rice with Maine lobster tail and saffron.',
    price: '$52',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=800&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Miso Glazed Salmon',
    description: 'Organic salmon with baby bok choy and ginger-soy reduction.',
    price: '$38',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Gold Leaf Soufflé',
    description: 'Dark chocolate soufflé topped with edible 24k gold leaf.',
    price: '$18',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28be0?w=800&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'Vanilla Crème Brûlée',
    description: 'Madagascar vanilla bean custard with caramelized sugar.',
    price: '$14',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'Smoked Old Fashioned',
    description: 'Bourbon with maple syrup and orange bitters, smoked in-house.',
    price: '$16',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&auto=format&fit=crop',
  },
];

export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&auto=format&fit=crop', title: 'Main Dining Room', category: 'Interior' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop', title: 'Signature Dish', category: 'Food' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1200&auto=format&fit=crop', title: 'Wine Cellar', category: 'Interior' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&auto=format&fit=crop', title: 'Our Head Chef', category: 'Team' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&auto=format&fit=crop', title: 'Seasonal Special', category: 'Food' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=1200&auto=format&fit=crop', title: 'Private Lounge', category: 'Interior' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Alexander Pierce',
    role: 'Food Critic',
    content: 'An absolute masterpiece of culinary art. The Truffle Scallops were life-changing.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    id: 't2',
    name: 'Sarah Jenkins',
    role: 'Casual Diner',
    content: 'The atmosphere is unmatched. Perfect for a romantic evening or a celebration.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704e',
  },
  {
    id: 't3',
    name: 'Michael Chen',
    role: 'Wine Connoisseur',
    content: 'Their wine selection is incredible. The sommelier knows exactly what to suggest.',
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
  },
];
