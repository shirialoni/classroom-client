import {
  IStudentInfo,
  ICreateStudentDto,
} from "../interfaces/student.interface";

import { AxiosInstance } from "axios";
import { createAxiosInstance } from "../config/axios.config";

class StudentsService {
  private api: AxiosInstance;

  constructor() {
    this.api = createAxiosInstance(
      `${import.meta.env.VITE_API_SERVER}/students`
    );
  }

  public async getStudents(): Promise<IStudentInfo[]> {
    const res = await this.api.get("/");

    return res.data;
  }

  public async getStudentsInClass(classId: number): Promise<IStudentInfo[]> {
    const res = await this.api.get(`/${classId}`);

    return res.data;
  }

  public async deleteStudentById(id: string): Promise<void> {
    await this.api.delete(`/${id}`);
  }

  public async createStudent(newStudent: ICreateStudentDto): Promise<void> {
    await this.api.post("", newStudent);
  }

  public async assignStudent(
    studentId: string,
    classId: number
  ): Promise<void> {
    await this.api.post(`/update-assignment/${studentId}`, { classId });
  }

  public async unassignStudent(studentId: string): Promise<void> {
    await this.api.post(`/update-assignment/${studentId}`, { classId: null });
  }
}

const studentsService = new StudentsService();

export default studentsService;
