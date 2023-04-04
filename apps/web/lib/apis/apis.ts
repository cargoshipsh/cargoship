import useSWR from "swr";
import { fetcher } from "../utils";

export const useApis = () => {
  const { data, error, isLoading, mutate } = useSWR(`/api/apis`, fetcher);

  return {
    apis: data,
    isLoadingApis: isLoading,
    isErrorApis: error,
    mutateApis: mutate,
  };
};

export const useApi = (id: string) => {
  const { data, error, isLoading, mutate } = useSWR(`/api/apis/${id}`, fetcher);

  return {
    api: data,
    isLoadingApi: isLoading,
    isErrorApi: error,
    mutateApi: mutate,
  };
};
