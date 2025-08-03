import CreatePage from "../../pages/CreatePage/CreatePage";
import ClassesPage from "../../pages/ClassesPage/ClassesPage";
import StudentsPage from "../../pages/StudentsPage/StudentsPage";

export const ROUTES = [
  { path: "classes", component: ClassesPage },
  { path: "students", component: StudentsPage },
  { path: "create", component: CreatePage },
];
