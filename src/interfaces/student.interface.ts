export interface IStudentInfo {
  id: string;
  age: number;
  lastName: string;
  firstName: string;
  profession: string;
  classId: number | null;
}

export interface ICreateStudentDto extends Omit<IStudentInfo, "classId"> {}
