import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/router.const.ts";
import ClassesPage from "../pages/ClassesPage/ClassesPage";

const ClassroomRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<ClassesPage />} />
      {ROUTES.map((route) => (
        <Route path={`/${route.path}`} element={<route.component />} />
      ))}
    </Routes>
  );
};

export default ClassroomRoutes;
