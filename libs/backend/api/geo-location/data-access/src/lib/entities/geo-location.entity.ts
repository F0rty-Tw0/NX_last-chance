export interface IGeoLocation {
  location: ILocation;
}

interface ILocation {
  city: string;
  postal: string;
  latitude: number;
  longitude: number;
}
