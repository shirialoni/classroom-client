import { SnackbarProviderProps } from "notistack";
import ErrorAlert from "../components/CostumeAlert/Error/ErrorAlert";

export const NOTISTACK_CONFIG: SnackbarProviderProps = {
  maxSnack: 3,
  autoHideDuration: 2000,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  preventDuplicate: true,
  Components: {
    error: ErrorAlert,
  },
};
