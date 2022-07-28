export interface ISallingOffer {
  ean: string;
  currency: string;
  originalPrice: number;
  newPrice: number;
  percentDiscount: number;
  discount: number;
  startTime: Date;
  endTime: Date;
  lastUpdate: Date;
  stock: number;
  stockUnit: string;
}
