import { createStyles } from "../../../styles/createStyle";

export const useStyles = () =>
  createStyles({
    cardHeader: {
      mb: 1,
      fontSize: 23,
      fontWeight: 700,
    },
    cardSubtitle: {
      mb: 1,
      fontSize: 19,
    },
    cardSeconderySub: {
      mb: 2.7,
      fontSize: 18,
      color: "text.secondary",
    },
  });
