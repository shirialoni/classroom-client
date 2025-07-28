import { AxiosInstance } from "axios";
import { createAxiosInstance } from "../config/axios.config";
import { ICreateClassDto, IClassesInfo } from "../interfaces/class.interface";

class ClassesService {
  private api: AxiosInstance;

  constructor() {
    this.api = createAxiosInstance(
      `${import.meta.env.VITE_API_SERVER}/classes`
    );
  }

  public async getClasses(): Promise<IClassesInfo[]> {
    const res = await this.api.get("/");

    return res.data;
  }

  public async deleteClassById(id: number): Promise<void> {
    await this.api.delete(`/${id}`);
  }

  public async createClass(newClass: ICreateClassDto): Promise<void> {
    await this.api.post("/", newClass);
  }
}

const classesService = new ClassesService();

export default classesService;
