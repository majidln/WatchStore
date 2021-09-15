export interface SlideType {
  id: string;
  image: number;
  brand: string;
  price: string;
  desc: string;
}

export const SLIDES = [
  {
    id: 'key-left'
  },
  {
    id: 'slide1',
    image: require('./../assets/slide1.png'),
    brand: 'CLESO',
    price: '$220',
    desc: 'Named after asteroid 6 0 9 4 (c l e s o) is currently travelling through time and space.'
  },
  {
    id: 'slide2',
    image: require('./../assets/slide2.png'),
    brand: 'HISAKO',
    price: '$249',
    desc: 'Named after asteroid 6 0 9 4 (h i s a k o) is currently travelling through time and space.'
  },
  {
    id: 'slide3',
    image: require('./../assets/slide3.png'),
    brand: 'Avenir',
    price: '$263',
    desc: 'Named after asteroid 6 0 9 4 (a v e n i r) is currently travelling through time and space.'
  }
];

export const PRODUCTS = [
  {
    id: 'product1',
    image: require('./../assets/product1.png'),
    brand: 'ORMOUS',
    price: '$249',
    size: 'White, size L'
  },
  {
    id: 'product1',
    image: require('./../assets/product1.png'),
    brand: 'HISAKO',
    price: '$249',
    size: 'Black, size L'
  }
];
