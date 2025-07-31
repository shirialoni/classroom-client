import { IClassesInfo } from "../../interfaces/class.interface";
import { IStudentInfo } from "../../interfaces/student.interface";

export interface IClassState {
  classes: IClassesInfo[];
}

export interface IStudentState {
  students: IStudentInfo[];
}

export type TClassroomState = {
  class: IClassState;
  student: IStudentState;
};
