import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IClassesInfo } from "../../interfaces/class.interface";
import { IStudentInfo } from "../../interfaces/student.interface";

const initialState: { classes: IClassesInfo[] } = { classes: [] };

const ClassSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    setClasses: (_, action: PayloadAction<IClassesInfo[]>) => {
      return { classes: action.payload };
    },
    addClass: (state, action: PayloadAction<IClassesInfo>) => {
      return { classes: [...state.classes, action.payload] };
    },
    removeClass: (state, action: PayloadAction<number>) => {
      return {
        classes: state.classes.filter(
          (classroom) => classroom.id !== action.payload
        ),
      };
    },
    assignStudentToClass: (
      state,
      action: PayloadAction<{ student: IStudentInfo; classId: number }>
    ) => {
      return {
        classes: state.classes.map((classroom) => {
          if (classroom.id !== action.payload.classId) {
            return classroom;
          }

          return {
            ...classroom,
            students: [...classroom.students, action.payload.student],
          };
        }),
      };
    },
    unassignStudentFromClass: (
      state,
      action: PayloadAction<{ studentId: string; classId: number }>
    ) => {
      return {
        classes: state.classes.map((classroom) => {
          if (classroom.id !== action.payload.classId) {
            return classroom;
          }

          return {
            ...classroom,
            students: classroom.students.filter(
              (student) => student.id !== action.payload.studentId
            ),
          };
        }),
      };
    },
  },
});

export const {
  addClass,
  setClasses,
  removeClass,
  assignStudentToClass,
  unassignStudentFromClass,
} = ClassSlice.actions;

export const classReducer = ClassSlice.reducer;
