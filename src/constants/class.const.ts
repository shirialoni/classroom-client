import { TEXT_REGEX } from "./regex.const";
import { QUERY_KEYS } from "./query-keys.const";
import { isNumberString } from "class-validator";
import { errorMsgs } from "../types/errors.type";
import { IField, valueType } from "../types/field.type";
import classesService from "../services/classes.service";
import { setClasses } from "../redux/slices/class.slice";
import { numberFieldOnKey } from "../utilities/Form.util";
import { IFetchOptions } from "../types/fetch-option.type";
import { classSelector } from "../redux/selectors/class.selector";
import { IClassesInfo, ICreateClassDto } from "../interfaces/class.interface";
import { TEXT_MAX_LENGTH } from "../components/CreateForm/constants/form.const";

export const FETCH_CLASS: IFetchOptions<IClassesInfo[]> = {
  key: QUERY_KEYS.CLASS,
  selector: classSelector,
  isLoaded: (data) => data.length > 0,
  dispatchFn: (data) => setClasses(data),
  queryFn: () => classesService.getClasses(),
};

export const CLASS_FIELDS: IField<ICreateClassDto>[] = [
  {
    key: "id",
    label: "Class ID",
    required: true,
    valuetype: valueType.number,
    registerOptions: {
      required: errorMsgs.required,
      validate: {
        validNumber: (v) =>
          (!(v.toString().startsWith("0") && v.toString().length > 1) &&
            isNumberString(v)) ||
          errorMsgs.validNumber,
      },
    },
    onKeyDown: numberFieldOnKey,
  },
  {
    key: "name",
    label: "Name",
    required: true,
    valuetype: valueType.text,
    registerOptions: {
      required: errorMsgs.required,
      pattern: {
        value: TEXT_REGEX,
        message: errorMsgs.patternMatch,
      },
      maxLength: {
        value: TEXT_MAX_LENGTH,
        message: errorMsgs.inMaxLength,
      },
    },
  },
  {
    key: "occupancy",
    label: "Max Seats",
    required: true,
    valuetype: valueType.number,
    registerOptions: {
      required: errorMsgs.required,
      validate: {
        validNumber: (v) =>
          (!v.toString().startsWith("0") && isNumberString(v)) ||
          errorMsgs.validNumber,
      },
    },
    onKeyDown: numberFieldOnKey,
  },
];
