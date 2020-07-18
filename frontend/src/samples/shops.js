import bath1 from '../images/bath/bath_salt.png'
import bath2 from '../images/bath/bath_tea.png'
import bath3 from '../images/bath/pink_bar.png'
import bath4 from '../images/bath/soap.png'

import florist1 from '../images/florist/magenta_flower.png'
import florist2 from '../images/florist/orange_flower.png'
import florist3 from '../images/florist/pink_flower.png'
import florist4 from '../images/florist/sunflower.png'
import florist5 from '../images/florist/sunflower_2.png'

import pottery1 from '../images/pottery/blue_cup.png'
import pottery2 from '../images/pottery/purple_pot.png'
import pottery3 from '../images/pottery/whitepot.png'
import pottery4 from '../images/pottery/yellowpot.png'

import toys1 from '../images/toys/brown_teddy.png'
import toys2 from '../images/toys/bunny.png'
import toys3 from '../images/toys/giraffe.png'
import toys4 from '../images/toys/grad_teddy.png'
import toys5 from '../images/toys/koala.png'
import toys6 from '../images/toys/owl.png'

import honey1 from '../images/honey/honey.png'
import honey2 from '../images/honey/honeygel.png'
import honey3 from '../images/honey/jar.png'
import honey4 from '../images/honey/mask.png'

import bakery1 from '../images/bakery/donut.png'
import bakery2 from '../images/bakery/load.png'
import bakery3 from '../images/bakery/rolls.png'
import bakery4 from '../images/bakery/round.png'
import bakery5 from '../images/bakery/sourdough.png'

const shop1 = {
  name: 'Rose Apothacery',
  description: 'Hi, Rose here! I sell fun things in your baths in this shop. Some things you might enjoy are the rose scents from my back garden!',
  products: [
    {
      name: 'Bath Salt',
      image: bath1,
      description: 'Add to your bath for a relaxing experience. 100g of product.',
      price: 6.50
    },
    {
      name: 'Bath Tea',
      image: bath2,
      description: 'Dunk into your bath for a relaxing experience. Scented with yellow roses.',
      price: 8.20
    },
    {
      name: 'Pink Bar',
      image: bath3,
      description: 'The product that made us big. Soap scented with pink roses from my garden and naturally coloured with pink roses. 100g of product.',
      price: 7.00
    },
    {
      name: 'Soap',
      image: bath4,
      description: 'Regular old unscented soap! 100g of product.',
      price: 5.00
    }
  ]
}
const shop2 = {
  name: 'Sophie\'s Flowers',
  description: 'We stock an assortment of flowers. Our most popular for July are lilies, hyacinths and cosmos! We offer custom gift wrapping and can fulfil any request. Just shoot us a message on 0428 288 123',
  products: [
    {
      name: 'Magenta Flowers',
      image: florist1,
      description: 'An assortment of magenta-coloured chrysanthemums. Popular for Mother\'s day',
      price: 35.00
    },
    {
      name: 'Orange Flowers',
      image: florist2,
      description: 'An assortment of orange-coloured flowers. Guaranteed to bring a smile to anyone\'s face',
      price: 28.00
    },
    {
      name: 'Pink Flowers',
      image: florist3,
      description: 'A gorgeous arrangement of pink flowers. Bound to make a statement.',
      price: 39.00
    },
    {
      name: 'Sunflowers',
      image: florist4,
      description: '7 sunflowers.',
      price: 20.00
    }
  ]
}
const shop3 = {
  name: 'The Smiths',
  description: 'Shop of Diana and Pierre Smith',
  products: [
    {
      name: 'Blue Cup',
      image: pottery1,
      description: 'Brilliant blue cup with purple accents.',
      price: 20.00
    },
    {
      name: 'Purple Pot',
      image: pottery2,
      description: 'Intense purple cup with yellow accents.',
      price: 20.00
    },
    {
      name: 'White Pot',
      image: pottery3,
      description: 'Stunning white pot with intricate details.',
      price: 20.00
    },
    {
      name: 'Yellow Pot',
      image: pottery4,
      description: 'Happy yellow pot adorned with white lily details.',
      price: 20.00
    }
  ]
}
const shop4 = {
  name: 'Teds Teddies',
  description: 'Custom teddy bears. Contact for personalisation.',
  products: [
    {
      name: 'Brown Teddy Bear',
      image: toys1,
      description: 'Classic brown teddy bear.',
      price: 15.00
    },
    {
      name: 'Bunny',
      image: toys2,
      description: 'Quirky white bunny.',
      price: 17.50
    },
    {
      name: 'Giraffe',
      image: toys3,
      description: 'Cheeky pink giraffe.',
      price: 12.50
    },
    {
      name: 'Graduation Bear',
      image: toys4,
      description: 'A happy bear for a happy graduate.',
      price: 18.00
    },
    {
      name: 'Koala Bear',
      image: toys5,
      description: 'Not really a bear.',
      price: 19
    },
    {
      name: 'Owl',
      image: toys6,
      description: 'Ted\'s unusually long bear',
      price: 16
    }
  ]
}
const shop5 = {
  name: 'Honeymead\'s',
  description: 'Specialty honey products for sale, right from bees in my back garden! Bees travel up to 6km away to gather their honey, so some of this honey might be thanks to the flowers in your back garden!',
  products: [
    {
      name: 'Honeymead\'s honey',
      image: honey1,
      description: 'The most fresh, local honey you can get! 150g pure honey',
      price: 7.50
    },
    {
      name: 'Honeymead\'s honey gel',
      image: honey2,
      description: 'Honey to treat stubborn blemishes on your skin. 10ml of product.',
      price: 9.00
    },
    {
      name: 'Honeymead\'s vanilla honey',
      image: honey3,
      description: 'Honeymead\'s fresh honey, infused with organic vanilla bean. 150g of product.',
      price: 12.50
    },
    {
      name: 'Honeymead\'s honey mask',
      image: honey4,
      description: 'Freshing, moisturising mask treatment for your skin. 200g of product.',
      price: 17.00
    }
  ]
}

const shop6 = {
  name: 'Bready for anything',
  description: 'We sell bread. Contact Brandon for enquiries.',
  products: [
    {
      name: 'Donut',
      image: bakery1,
      description: 'Frosty donut.',
      price: 3.00
    },
    {
      name: 'Loaf',
      image: bakery2,
      description: 'Loaf of bread.',
      price: 3.00
    },
    {
      name: 'Bread rolls',
      image: bakery3,
      description: 'Pack of four fresh bread rolls.',
      price: 3.00
    },
    {
      name: 'Cheesy bread bomb',
      image: bakery4,
      description: 'We got this idea from a Korean street market',
      price: 4.00
    },
    {
      name: 'Sourdough bread',
      image: bakery5,
      description: 'You said you\'d start making this right? Now you don\'t have to!',
      price: 4.00
    }
  ]
}
export const shops = [
  shop1, shop2, shop3, shop4, shop5, shop6
]
