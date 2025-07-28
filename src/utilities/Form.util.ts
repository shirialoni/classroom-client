import { isNumberString } from "class-validator";

export const numberFieldOnKey: React.KeyboardEventHandler<HTMLDivElement> = (
  e
) => !isNumberString(e.key) && e.key !== "Backspace" && e.preventDefault();
