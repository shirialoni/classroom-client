import { createStyles } from "../../../styles/createStyle";
import { usePaletteContext } from "../../../contexts/palette.context";

export const useStyles = () => {
  const { palette } = usePaletteContext();

  return createStyles({
    deleteIcon: {
      fontSize: "1.8rem",
    },
    button: {
      color: palette,
    },
  });
};
