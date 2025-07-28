import { createStyles } from "../../styles/createStyle.ts";
import { usePaletteContext } from "../../contexts/palette.context.tsx";

export const useStyles = () => {
  const { palette } = usePaletteContext();

  return createStyles({
    main: {
      gap: "3rem",
      marginTop: 7,
      marginLeft: 14,
      display: "flex",
      flexWrap: "wrap",
    },
    button: {
      color: palette,
    },
    loader: {
      color: palette,
    },
    loaderArea: {
      marginTop: 35,
      display: "flex",
      justifyContent: "center",
    },
  });
};
