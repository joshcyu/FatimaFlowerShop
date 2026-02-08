export interface FlowerData {
  id: string;
  name: string;
  symbolism: string;
  description: string;
  image: string;
  category: 'individual' | 'bouquet';
}

export const flowerSymbolisms: FlowerData[] = [
  {
    id: 'white-rose',
    name: 'White Roses',
    symbolism: 'Purity, Innocence, New Beginnings, Eternal Love',
    description: 'White roses represent purity and innocence, making them perfect for weddings and new beginnings. They symbolize eternal love and reverence.',
    image: 'whiteroses.webp',
    category: 'individual',
  },
  {
    id: 'red-rose',
    name: 'Red Roses',
    symbolism: 'Love, Romance, Passion',
    description: 'The classic symbol of romantic love. Red roses convey deep emotions and passionate feelings, perfect for expressing your heart.',
    image: 'redroses.webp',
    category: 'individual',
  },
  {
    id: 'pink-rose',
    name: 'Pink Roses',
    symbolism: 'Grace, Admiration, Gratitude',
    description: 'Pink roses express grace, gratitude, and admiration. They are perfect for showing appreciation and gentle affection.',
    image: 'pinkrose.webp',
    category: 'individual',
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    symbolism: 'Warmth, Loyalty, Adoration',
    description: 'Sunflowers represent warmth, happiness, and loyalty. Their bright faces follow the sun, symbolizing devotion and adoration.',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&auto=format&fit=crop',
    category: 'individual',
  },
  {
    id: 'tulip',
    name: 'Tulips',
    symbolism: 'Perfect Love, Declaration',
    description: 'Tulips symbolize perfect love and are often given as a declaration of love. Each color carries its own special meaning.',
    image: 'tulips.webp',
    category: 'individual',
  },
  {
    id: 'lily',
    name: 'Lilies',
    symbolism: 'Devotion, Purity, Motherhood',
    description: 'Lilies represent devotion and purity of heart. They are associated with motherhood and are often used in religious ceremonies.',
    image: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&auto=format&fit=crop',
    category: 'individual',
  },
  {
    id: 'carnation',
    name: 'Carnations',
    symbolism: 'Admiration, Distinction, Love',
    description: 'Carnations symbolize admiration and distinction. Different colors express different sentiments from deep love to gratitude.',
    image: 'carnations.webp',
    category: 'individual',
  },
  {
    id: 'baby-breath',
    name: "Baby's Breath",
    symbolism: 'Everlasting Love, Innocence, Purity',
    description: "Baby's breath represents everlasting love and innocence. Its delicate blooms add softness to any arrangement.",
    image: "baby'sbreath.webp",
    category: 'individual',
  },
  {
    id: 'orchid',
    name: 'Orchids',
    symbolism: 'Luxury, Strength, Beauty',
    description: 'Orchids represent luxury, refined beauty, and strength. They symbolize rare and delicate beauty that lasts.',
    image: 'orchid.webp',
    category: 'individual',
  },
  {
    id: 'daisy',
    name: 'Daisies',
    symbolism: 'Innocence, Purity, New Beginnings',
    description: 'Daisies symbolize innocence, purity, and loyal love. They represent the joy of new beginnings.',
    image: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=600&auto=format&fit=crop',
    category: 'individual',
  },
  {
    id: 'peony',
    name: 'Peonies',
    symbolism: 'Prosperity, Good Fortune, Romance',
    description: 'Peonies symbolize prosperity, good fortune, and a happy marriage. They represent romance and bashfulness.',
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?w=600&auto=format&fit=crop',
    category: 'individual',
  },
  {
    id: 'jasmine',
    name: 'Jasmine',
    symbolism: 'Purity, Sensuality, Grace',
    description: 'Jasmine represents purity, grace, and elegance. Its sweet fragrance symbolizes sensuality and attachment.',
    image: 'jasmine.webp',
    category: 'individual',
  },
];

export const bouquetTypes = [
  {
    id: 'romantic',
    name: 'Romantic Collection',
    description: 'Express your love with our curated romantic arrangements',
    image: 'biromantic.webp',
    occasion: 'Anniversary & Romance',
  },
  {
    id: 'birthday',
    name: 'Birthday Blooms',
    description: 'Celebrate special moments with vibrant birthday bouquets',
    image: 'birthday.webp',
    occasion: 'Birthdays',
  },
  {
    id: 'sympathy',
    name: 'Sympathy & Comfort',
    description: 'Thoughtful arrangements to express your condolences',
    image: 'bisympathy.webp',
    occasion: 'Sympathy',
  },
  {
    id: 'congratulations',
    name: 'Celebration Bouquets',
    description: 'Mark achievements with stunning celebratory flowers',
    image: 'bicelebration.webp',
    occasion: 'Congratulations',
  },
];

export const galleryImages = [
  {
    id: 1,
    src: 'B1.webp',
    alt: 'Beautiful flower arrangement',
    category: 'arrangement',
  },
  {
    id: 2,
    src: 'B2.webp',
    alt: 'Colorful bouquet',
    category: 'bouquet',
  },
  {
    id: 3,
    src: 'B3.webp',
    alt: 'White flower arrangement',
    category: 'arrangement',
  },
  {
    id: 4,
    src: 'B4.webp',
    alt: 'Pink roses bouquet',
    category: 'bouquet',
  },
  {
    id: 5,
    src: 'B5.webp',
    alt: 'Red roses',
    category: 'individual',
  },
  {
    id: 6,
    src: 'B6.webp',
    alt: 'Wedding flowers',
    category: 'wedding',
  },
  {
    id: 7,
    src: 'B7.webp',
    alt: 'Pink flower closeup',
    category: 'individual',
  },
  {
    id: 8,
    src: 'B8.webp',
    alt: 'Peony arrangement',
    category: 'arrangement',
  },
  {
    id: 9,
    src: 'B9.webp',
    alt: 'Peony arrangement',
    category: 'arrangement',
  },
];
