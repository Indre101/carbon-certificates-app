import { useFetchPaginatedCertificates } from "../api";
import {
  Table,
  TableHead,
  TableRow,
  TableColumnHeader,
  TableBody,
  TableRowHeader,
  TableCell,
  LoadingWrapper,
} from "../components";

export const Certificates = () => {
  const { certificates, isLoading } = useFetchPaginatedCertificates();

  return (
    <LoadingWrapper isLoading={isLoading}>
      <div className="flex justify-center py-12">
        <div className="w-[80%] overflow-scroll max-h-[80%] rounded border border-neutral-100">
          <Table className="w-full">
            <TableHead>
              <TableRow>
                <TableColumnHeader>Unique ID</TableColumnHeader>
                <TableColumnHeader>Originator</TableColumnHeader>
                <TableColumnHeader>Originator Country</TableColumnHeader>
                <TableColumnHeader>Owner</TableColumnHeader>
                <TableColumnHeader>Owner Country</TableColumnHeader>
                <TableColumnHeader>Status</TableColumnHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {certificates?.map((certificate) => {
                const {
                  carbonCertificateOwnerAccount: { carbonUser },
                } = certificate;
                return (
                  <TableRow key={certificate.id}>
                    <TableRowHeader>{certificate.uniqueNumber}</TableRowHeader>
                    <TableCell>{certificate.companyName}</TableCell>
                    <TableCell>{certificate.countryCode}</TableCell>
                    <TableCell>{carbonUser.company.name}</TableCell>
                    <TableCell>{carbonUser.company.address.country}</TableCell>
                    <TableCell>{certificate.status}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </LoadingWrapper>
  );
};
