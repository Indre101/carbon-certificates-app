import { useEffect, useState } from "react";
import { ICertificate } from "../types";

type ISavedCertificate = Record<string, ICertificate>;

export const useSaveCertificate = () => {
  const savedCertificatesLocalStorage = JSON.parse(
    localStorage.getItem("certificates") || "[]"
  );
  const [savedCertificates, setSavedCertificates] = useState<ISavedCertificate>(
    savedCertificatesLocalStorage
  );

  const removeCertificate = ({
    savedCertificates,
    addedCertificate,
  }: {
    savedCertificates: ISavedCertificate;
    addedCertificate: ICertificate;
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [addedCertificate.id]: _, ...remainingCertificates } =
      savedCertificates;

    setSavedCertificates(remainingCertificates);
  };

  const addCertificate = ({
    savedCertificates,
    selectedCertificate,
  }: {
    savedCertificates: ISavedCertificate;
    selectedCertificate: ICertificate;
  }) => {
    const updatedCertificates: ISavedCertificate = {
      ...savedCertificates,
      [selectedCertificate.id]: selectedCertificate,
    };

    setSavedCertificates(updatedCertificates);
  };

  const handleSaveCertificate = (selectedCertificate: ICertificate) => {
    const addedCertificate = savedCertificates[selectedCertificate.id];

    if (addedCertificate) {
      removeCertificate({ savedCertificates, addedCertificate });
      return;
    }

    addCertificate({
      savedCertificates,
      selectedCertificate,
    });
  };

  useEffect(() => {
    const updateLocalStorage = () =>
      localStorage.setItem("certificates", JSON.stringify(savedCertificates));

    updateLocalStorage();
  }, [savedCertificates]);

  return { handleSaveCertificate, savedCertificates };
};
