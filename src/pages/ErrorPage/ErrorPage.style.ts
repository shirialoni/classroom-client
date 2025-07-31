import { createStyles } from "../../styles/createStyle.ts";
import { usePaletteContext } from "../../contexts/palette.context.tsx";

export const useStyles = () => {
  const { palette } = usePaletteContext();
  
  return createStyles({
    main: {
      m: "0 auto",
      display: "flex",
      p: 12,
      gap: 7,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 24,
      boxShadow: 3,
      borderRadius: 3,
      width: 750,
    },

    header: {
      fontWeight: 800,
      color: palette,
    },
  });
};
