import { createStyles } from "../../styles/createStyle.ts";

export const useStyles = () =>
  createStyles({
    menuLink: {
      width: "100%",
      color: "black",
      textDecoration: "none",
      textTransform: "capitalize",
    },
    main: {
      width: 150,
    },
  });
