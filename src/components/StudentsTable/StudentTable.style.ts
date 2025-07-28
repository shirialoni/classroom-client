import { createStyles } from "../../styles/createStyle.ts";
import { usePaletteContext } from "../../contexts/palette.context.tsx";

export const useStyles = () => {
  const { palette } = usePaletteContext();

  return createStyles({
    tableCard: {
      width: "80%",
      fontSize: 20,
      margin: "0 auto",
      marginTop: 7,
      display: "flex",
    },
    button: {
      color: palette,
      borderColor: palette,
    },
    loader: {
      color: palette,
    },
    loaderArea: {
      display: "flex",
      justifyContent: "center",
      marginTop: 35,
    },
  });
};
