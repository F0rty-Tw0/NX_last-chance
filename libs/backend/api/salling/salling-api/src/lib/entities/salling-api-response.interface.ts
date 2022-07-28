import { ISallingOffer } from './salling-offer.entity';
import { ISallingProduct } from './salling-product.entity';
import { ISallingStore } from './salling-store/salling-store.entity';

export interface ISallingFoodWaste {
  clearances: ISallingClearance[];
  store: ISallingStore;
}

export interface ISallingClearance {
  offer: ISallingOffer;
  product: ISallingProduct;
}
