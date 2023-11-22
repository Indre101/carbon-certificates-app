import { useQuery } from "@tanstack/react-query";
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

export const useFetchPaginatedCertificates = () => {
  const { data, isLoading, isError, isPending } = useQuery({
    queryKey: ["certificates"],
    queryFn: () => fetchCertificates(),
  });

  return { certificates: data?.data, isLoading, isError, isPending };
};
