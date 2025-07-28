import { TextFieldProps } from "@mui/material";
import { FieldValues, Path, RegisterOptions } from "react-hook-form";

export enum valueType {
  text = "text",
  number = "number",
}

export interface IField<T extends FieldValues>
  extends Omit<TextFieldProps, "key"> {
  key: Path<T>;
  valuetype: valueType;
  registerOptions: RegisterOptions<T, Path<T>>;
}
