import {
  Table,
  TableHead,
  TableRow,
  TableColumnHeader,
  TableBody,
  TableRowHeader,
  TableCell,
  SaveButton,
  FallbackUI,
} from "../components";
import { useSaveCertificate } from "../hooks";
import { copyToClipBoard } from "../utils";

export const Favourites = () => {
  const { handleSaveCertificate, savedCertificates } = useSaveCertificate();

  return (
    <div className="flex justify-center py-12">
      {Object.keys(savedCertificates).length !== 0 ? (
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
              {Object.values(savedCertificates).map((certificate) => {
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
      ) : (
        <FallbackUI>
          Currently nothing to display, please try saving certificate
        </FallbackUI>
      )}
    </div>
  );
};
