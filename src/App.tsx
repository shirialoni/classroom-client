import { BrowserRouter as Router } from "react-router-dom";
import ClassroomRoutes from "./router/classroom.router.tsx";
import ClassroomNav from "./components/ClassroomNav/Navbar.tsx";

const App = () => {
  return (
    <>
      <Router>
        <ClassroomNav />
        <ClassroomRoutes />
      </Router>
    </>
  );
};

export default App;
