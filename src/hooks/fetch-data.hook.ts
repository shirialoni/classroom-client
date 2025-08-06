import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { IFetchOptions } from "../types/fetch-option.type";

export const useFetchData = <T>(fetchOptions: IFetchOptions<T>) => {
  const dispatch = useDispatch();
  const initData = useSelector(fetchOptions.selector);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [fetchOptions.key],
    queryFn: fetchOptions.queryFn,
    retry: 1,
    retryDelay: 1000,
    throwOnError: true,
    refetchOnWindowFocus: false,
    enabled: !fetchOptions.isLoaded(initData),
  });

  useEffect(() => {
    if (isSuccess && data && !fetchOptions.isLoaded(initData)) {
      dispatch(fetchOptions.dispatchFn(data));
    }
  }, [isSuccess, data]);

  return { initData, isLoading };
};
