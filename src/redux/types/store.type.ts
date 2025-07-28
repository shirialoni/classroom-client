import { IClassesInfo } from "../../interfaces/class.interface";
import { IStudentInfo } from "../../interfaces/student.interface";

export type TClassroomState = {
  class: IClassState;
  student: IStudentState;
};

export interface IClassState {
  classes: IClassesInfo[];
}

export interface IStudentState {
  students: IStudentInfo[];
}
