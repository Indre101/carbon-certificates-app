import { ICompany } from "./company";
import { CountryCode } from "./country-code";

export interface ICertificate {
  id: number;
  companyName: string;
  countryCode: CountryCode;
  status: string;
  uniqueNumber: string;
  validity: string;
  carbonCertificateOwnerAccount: {
    id: number;
    carbonUser: {
      id: number;
      user: IUser;
      company: ICompany;
    };
  };
}
