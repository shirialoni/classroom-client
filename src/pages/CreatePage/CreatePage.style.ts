import { createStyles } from "../../styles/createStyle.ts";

export const useStyles = () =>
  createStyles({
    main: {
      gap: "40px",
      margin: "100px",
      display: "grid",
      justifyItems: "center",
      gridTemplate: "auto auto / repeat(2, 1fr)",
    },
  });
