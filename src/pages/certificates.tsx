import { useState } from "react";
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
  SaveButton,
  Pagination,
} from "../components";
import { useSaveCertificate } from "../hooks";
import { copyToClipBoard } from "../utils";

export const Certificates = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const { certificates, isLoading, pages } =
    useFetchPaginatedCertificates(activePage);
  const { handleSaveCertificate, savedCertificates } = useSaveCertificate();

  return (
    <LoadingWrapper isLoading={isLoading}>
      <div className="flex justify-center h-full py-12 flex-col justify-center items-center space-between">
        <div className="overflow-scroll max-h-[85%] max-w-[80%] rounded border border-neutral-100">
          <Table className="w-full">
            <TableHead>
              <TableRow>
                <TableColumnHeader></TableColumnHeader>
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
                    <TableCell>
                      <SaveButton
                        isSaved={Boolean(savedCertificates[certificate.id])}
                        onClick={() => handleSaveCertificate(certificate)}
                      />
                    </TableCell>
                    <TableRowHeader
                      onClick={() => copyToClipBoard(certificate.uniqueNumber)}>
                      {certificate.uniqueNumber}
                    </TableRowHeader>
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
        <div className="mt-auto">
          <Pagination
            current={activePage}
            total={pages ?? 0}
            onPageChange={setActivePage}
          />
        </div>
      </div>
    </LoadingWrapper>
  );
};
