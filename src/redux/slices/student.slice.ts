import { IStudentState } from "../types/store.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStudentInfo } from "../../interfaces/student.interface";

const initialState: IStudentState = { students: [] };

const StudentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    setStudents: (__, action: PayloadAction<IStudentInfo[]>) => {
      return { students: action.payload };
    },
    addStudent: (state, action: PayloadAction<IStudentInfo>) => {
      return { students: [...state.students, action.payload] };
    },
    removeStudent: (state, action: PayloadAction<string>) => {
      return {
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    },
    assignStudent: (
      state,
      action: PayloadAction<{ studentId: string; classId: number }>
    ) => {
      return {
        students: state.students.map((student) => {
          if (student.id !== action.payload.studentId) {
            return student;
          }

          return {
            ...student,
            classId: action.payload.classId,
          };
        }),
      };
    },
    unassignStudent: (state, action: PayloadAction<string>) => {
      return {
        students: state.students.map((student) => ({
          ...student,
          classId: student.id === action.payload ? null : student.classId,
        })),
      };
    },
  },
});

export const {
  addStudent,
  setStudents,
  removeStudent,
  assignStudent,
  unassignStudent,
} = StudentSlice.actions;

export const studentReducer = StudentSlice.reducer;
