import { CountryCode } from "./country-code";

export interface ICompany {
  id: number;
  name: string;
  address: {
    id: number;
    country: CountryCode;
  };
}
