import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { IFetchOptions } from "../types/fetch-option.type";

export const useFetchData = <T>(fetchOption: IFetchOptions<T>) => {
  const dispatch = useDispatch();
  const initData = useSelector(fetchOption.selector);

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: [fetchOption.key],
    queryFn: fetchOption.queryFn,
    retry: 1,
    retryDelay: 1000,
    throwOnError: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: !fetchOption.isLoaded(initData),
  });

  useEffect(() => {
    if (isSuccess && data && !fetchOption.isLoaded(initData)) {
      dispatch(fetchOption.dispatchFn(data));
    }
  }, [isSuccess, data]);

  return { initData, isLoading };
};
