import heroProduct from '../assets/hero/hero-product.png';
import heroBg from '../assets/hero/hero-bg.png';
import heroLifestyle from '../assets/hero/hero-lifestyle.png';

import storyDog from '../assets/story/story-dog.png';
import storyFounder from '../assets/story/story-founder.png';
import storyWorkshop from '../assets/story/story-workshop.png';

import productMain from '../assets/product/product-main.png';
import productDetail1 from '../assets/product/product-detail1.png';
import productDetail2 from '../assets/product/product-detail2.png';
import productAction from '../assets/product/product-action.png';

import sizesSmall from '../assets/sizes/sizes-small.png';
import sizesMedium from '../assets/sizes/sizes-medium.png';
import sizesLarge from '../assets/sizes/sizes-large.png';
import sizesComparison from '../assets/sizes/sizes-comparison.png';

import materialsTexture from '../assets/materials/materials-texture.png';
import materialsRaw from '../assets/materials/materials-raw.png';
import materialsCompost from '../assets/materials/materials-compost.png';

import ethicalArtisan from '../assets/ethical/ethical-artisan.png';
import ethicalCommunity from '../assets/ethical/ethical-community.png';

import futureTugtwine from '../assets/future/future-tugtwine.png';
import futureKnotcore from '../assets/future/future-knotcore.png';
import futureInfinity from '../assets/future/future-infinity.png';
import futureSnuggle from '../assets/future/future-snuggle.png';

/**
 * Centralized Asset Management
 * Using local imports for production-ready asset handling.
 */
export const ASSETS = {
  hero: {
    product: heroProduct,
    bg: heroBg,
    lifestyle: heroLifestyle,
  },
  story: {
    dog: storyDog,
    founder: storyFounder,
    workshop: storyWorkshop,
  },
  product: {
    main: productMain,
    detail1: productDetail1,
    detail2: productDetail2,
    action: productAction,
  },
  sizes: {
    small: sizesSmall,
    medium: sizesMedium,
    large: sizesLarge,
    comparison: sizesComparison,
  },
  materials: {
    texture: materialsTexture,
    raw: materialsRaw,
    compost: materialsCompost,
  },
  ethical: {
    artisan: ethicalArtisan,
    community: ethicalCommunity,
  },
  future: {
    tugtwine: futureTugtwine,
    knotcore: futureKnotcore,
    infinity: futureInfinity,
    snuggle: futureSnuggle,
  }
};
