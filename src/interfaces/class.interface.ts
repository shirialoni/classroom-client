import { IStudentInfo } from "./student.interface";

export interface IClassesInfo {
  id: number;
  name: string;
  occupancy: number;
  students: IStudentInfo[];
}

export interface ICreateClassDto extends Omit<IClassesInfo, "students"> {}
