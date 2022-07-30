export interface ISallingStoreHours {
  close: Date;
  open: Date;
  type: string;
  closed: boolean;
  date: string;
  customerFlow: number[];
}
