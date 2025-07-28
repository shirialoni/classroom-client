import { createStyles } from "../../styles/createStyle.ts";
import { usePaletteContext } from "../../contexts/palette.context.tsx";

export const useStyles = () => {
  const { palette } = usePaletteContext();

  return createStyles({
    dataName: {
      paddingBottom: 4,
      textAlign: "center",
    },
    dialogTitle: {
      paddingLeft: 7,
      paddingRight: 7,
    },
    dialogButton: {
      backgroundColor: palette,
    },
  });
};
