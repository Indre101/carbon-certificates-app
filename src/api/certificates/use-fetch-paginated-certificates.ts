import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import { ApiResponse, ICertificates } from "../../types";

const apiUrl =
  "https://demo.api.agreena.com/api/public/carbon_registry/v1/certificates";
const accessToken = "Commoditrader-React-FE-Farmer";
const limit = 10;

const fetchCertificates = async (page = 1): Promise<ICertificates> => {
  const url = `${apiUrl}?includeMeta=true&page=${page}&limit=${limit}`;

  const response = await axios.get<ApiResponse<ICertificates>>(url, {
    headers: {
      "API-ACCESS-TOKEN": accessToken,
      "Content-Type": "application/json",
    },
  });

  return response.data.result;
};

export const useFetchPaginatedCertificates = (page: number) => {
  const { data, isLoading, isError, isPending } = useQuery({
    queryKey: ["certificates", page],
    queryFn: () => fetchCertificates(page),
    placeholderData: keepPreviousData,
  });

  return {
    certificates: data?.data,
    isLoading,
    isError,
    isPending,
    pages: data?.meta.totalPages,
  };
};
