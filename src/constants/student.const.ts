import {
  ICreateStudentDto,
  IStudentInfo,
} from "../interfaces/student.interface";

import {
  IDENTITY_LOCALE,
  TEXT_MAX_LENGTH,
} from "../components/CreateForm/constants/form.const";

import { TEXT_REGEX } from "./regex.const";
import { QUERY_KEYS } from "./query-keys.const";
import { errorMsgs } from "../types/errors.type";
import { IField, valueType } from "../types/field.type";
import { numberFieldOnKey } from "../utilities/Form.util";
import studentsService from "../services/students.service";
import { IFetchOptions } from "../types/fetch-option.type";
import { setStudents } from "../redux/slices/student.slice";
import { isIdentityCard, isNumberString } from "class-validator";
import { studentSelector } from "../redux/selectors/student.selector";

export const FETCH_STUDENT: IFetchOptions<IStudentInfo[]> = {
  key: QUERY_KEYS.STUDENT,
  selector: studentSelector,
  isLoaded: (data) => data.length > 0,
  queryFn: () => studentsService.getStudents(),
  dispatchFn: (data: IStudentInfo[]) => setStudents(data),
};

export const STUDENT_FIELDS: IField<ICreateStudentDto>[] = [
  {
    key: "id",
    label: "Student ID",
    required: true,
    valuetype: valueType.text,
    registerOptions: {
      required: errorMsgs.required,
      validate: {
        isId: (v) => isIdentityCard(v, IDENTITY_LOCALE) || errorMsgs.isId,
      },
    },
    onKeyDown: numberFieldOnKey,
  },
  {
    key: "firstName",
    label: "First Name",
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
    key: "lastName",
    label: "Last Name",
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
    key: "age",
    label: "Age",
    required: false,
    valuetype: valueType.number,
    registerOptions: {
      validate: {
        validNumber: (v) =>
          (!v.toString().startsWith("0") && isNumberString(v)) || !v ||
          errorMsgs.validNumber,
      },
    },
    onKeyDown: (e) =>
      !isNumberString(e.key) && e.key !== "Backspace" && e.preventDefault(),
  },
  {
    key: "profession",
    label: "Profession",
    required: true,
    valuetype: valueType.text,
    registerOptions: {
      required: errorMsgs.required,
      maxLength: {
        value: TEXT_MAX_LENGTH,
        message: errorMsgs.inMaxLength,
      },
    },
  },
];
