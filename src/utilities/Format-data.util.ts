import { FieldValues, Path } from "react-hook-form";
import { IField, valueType } from "../types/field.type";

export const formatData = <T extends FieldValues>(
  data: T,
  fieldsList: IField<T>[]
) => {
  fieldsList.forEach((field) => {
    if (field.valuetype === valueType.number) {
      data[field.key] = Number(data[field.key]) as T[Path<T>];
    }
  });

  return data;
};
