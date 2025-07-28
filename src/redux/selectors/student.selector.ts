import { RootState } from "../store";

export const studentSelector = (state: RootState) => state.student.students;
