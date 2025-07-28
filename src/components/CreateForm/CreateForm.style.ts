import { createStyles } from "../../styles/createStyle.ts";
import { usePaletteContext } from "../../contexts/palette.context.tsx";

export const useStyles = () => {
  const { palette } = usePaletteContext();
  return createStyles({
    formFieldArea: {
      width: "83%",
      margin: "0 auto",
      marginBottom: 1,
    },
    alertArea: {
      marginTop: 4,
    },
    button: {
      fontSize: 18,
      backgroundColor: palette,
    },
    field: {
      "& label.Mui-focused": {
        color: palette,
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
          borderColor: palette,
        },
      },
    },
  });
};
