import { ICertificate } from "./certificate";
import { IPaginationMeta } from "./pagination-meta";

export interface ICertificates {
  data: Array<ICertificate>;
  meta: IPaginationMeta;
}
