import { createStyles } from "../../styles/createStyle.ts";
import { usePaletteContext } from "../../contexts/palette.context.tsx";

export const useStyles = () => {
  const { palette } = usePaletteContext();
  return createStyles({
    main: {
      padding: 3,
      flexGrow: 1,
      bgcolor: palette,
    },
    textSize: {
      fontSize: "2.4rem",
    },
    icon: {
      ml: 0.4,
    },
    menuIcon: {
      mr: 2,
    },
  });
};
