export interface SlideType {
  id: string;
  image: number;
  brand: string;
  price: string;
}

export const SLIDES = [
  {
    id: 'slide1',
    image: require('./../assets/slide1.png'),
    brand: 'CLESO',
    price: '$220'
  },
  {
    id: 'slide2',
    image: require('./../assets/slide2.png'),
    brand: 'HISAKO',
    price: '$249'
  },
  {
    id: 'slide3',
    image: require('./../assets/slide3.png'),
    brand: 'Avenir',
    price: '$263'
  }
]

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
]
