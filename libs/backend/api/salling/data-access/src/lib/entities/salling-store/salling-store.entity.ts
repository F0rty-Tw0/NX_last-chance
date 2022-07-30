import { ISallingStoreAddress } from './salling-store-address.interface';
import { ISallingStoreHours } from './salling-store-hours.interface';

export interface ISallingStore {
  id: string;
  type: string;
  name: string;
  brand: string;
  address: ISallingStoreAddress;
  coordinates: number[];
  hours: ISallingStoreHours[];
}

export interface IGeoCoordinates {
  lat: number;
  lng: number;
}
