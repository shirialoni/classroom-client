import React from "react";
import { Alert } from "@mui/material";
import { useStyles } from "./ErrorAlert.style";
import { SnackbarContent, CustomContentProps } from "notistack";

const ErrorAlert = React.forwardRef<HTMLDivElement, CustomContentProps>(
  (props, ref) => {
    const styles = useStyles();
    const { id, message, ...other } = props;

    return (
      <SnackbarContent ref={ref} role="alert" {...other}>
        <Alert severity="error" sx={styles.alert}>
          {message}
        </Alert>
      </SnackbarContent>
    );
  }
);

export default ErrorAlert;
