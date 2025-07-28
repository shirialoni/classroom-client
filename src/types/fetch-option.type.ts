import { RootState } from "../redux/store";

export interface IFetchOptions<T> {
  key: string;
  queryFn: () => void;
  isLoaded: (data: T) => boolean;
  selector: (state: RootState) => T;
  dispatchFn: (data: T) => { payload: T; type: string };
}
