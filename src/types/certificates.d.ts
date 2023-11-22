import { ICertificate } from "./certificate";

export interface ICertificates {
  data: Array<ICertificate>;
  meta: IPaginationMeta;
}
