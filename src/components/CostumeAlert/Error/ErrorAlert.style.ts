import { createStyles } from "../../../styles/createStyle.ts";

export const useStyles = () =>
  createStyles({
    alert: {
      fontSize: 18,
      boxShadow: 2,
      "& .MuiAlert-icon": {
        fontSize: 25,
      },
    },
  });
