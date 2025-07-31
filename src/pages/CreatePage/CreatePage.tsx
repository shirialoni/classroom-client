import {
  IClassesInfo,
  ICreateClassDto,
} from "../../interfaces/class.interface.ts";

import {
  IStudentInfo,
  ICreateStudentDto,
} from "../../interfaces/student.interface.ts";

import {
  ADD_STUDENT_HEADER,
  CREATE_CLASS_HEADER,
} from "../../components/CreateForm/constants/form.const.ts";

import { Box } from "@mui/material";
import { useStyles } from "./CreatePage.style.ts";
import { useDispatch, useSelector } from "react-redux";
import { addClass } from "../../redux/slices/class.slice.ts";
import { CLASS_FIELDS } from "../../constants/class.const.ts";
import classesService from "../../services/classes.service.ts";
import { addStudent } from "../../redux/slices/student.slice.ts";
import studentsService from "../../services/students.service.ts";
import { STUDENT_FIELDS } from "../../constants/student.const.ts";
import CreateForm from "../../components/CreateForm/CreateForm.tsx";
import { formatFormData } from "../../utilities/Format-data.util.ts";
import { classSelector } from "../../redux/selectors/class.selector.ts";
import { studentSelector } from "../../redux/selectors/student.selector.ts";

const CreatePage = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const classes = useSelector(classSelector);
  const students = useSelector(studentSelector);

  const handleAddStudent = async (newStudent: ICreateStudentDto) => {
    formatFormData<ICreateStudentDto>(newStudent, STUDENT_FIELDS);

    await studentsService.createStudent(newStudent);

    if (students.length > 0) {
      const student: IStudentInfo = { ...newStudent, classId: null };
      dispatch(addStudent(student));
    }
  };

  const handleAddClass = async (newClassroom: ICreateClassDto) => {
    formatFormData<ICreateClassDto>(newClassroom, CLASS_FIELDS);

    await classesService.createClass(newClassroom);

    if (classes.length > 0) {
      const classroom: IClassesInfo = { ...newClassroom, students: [] };
      dispatch(addClass(classroom));
    }
  };

  return (
    <Box sx={styles.main}>
      <CreateForm<ICreateClassDto>
        fieldsList={CLASS_FIELDS}
        onSubmit={handleAddClass}
        title={CREATE_CLASS_HEADER}
      />
      <CreateForm<ICreateStudentDto>
        title={ADD_STUDENT_HEADER}
        fieldsList={STUDENT_FIELDS}
        onSubmit={handleAddStudent}
      />
    </Box>
  );
};

export default CreatePage;
