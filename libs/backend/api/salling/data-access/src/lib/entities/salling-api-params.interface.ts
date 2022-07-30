export interface ISallingApiGeoParams {
  geo: string;
  radius?: number;
}

export interface ISallingApiZipParams {
  zip: string;
  radius?: number;
}

export type SallingApiParamsType = ISallingApiGeoParams | ISallingApiZipParams;
