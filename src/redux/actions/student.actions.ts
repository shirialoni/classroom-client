import {
  assignStudentToClass,
  unassignStudentFromClass,
} from "../slices/class.slice";

import {
  assignStudent,
  removeStudent,
  unassignStudent,
} from "../slices/student.slice";

import { Dispatch } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";
import studentsService from "../../services/students.service";
import { IClassesInfo } from "../../interfaces/class.interface";
import { IStudentInfo } from "../../interfaces/student.interface";

export const handleAssignStudent = async (
  classId: number,
  student: IStudentInfo,
  dispatch: Dispatch
) => {
  try {
    await studentsService.assignStudent(student.id, classId);
    dispatch(assignStudentToClass({ student, classId }));

    if (student.classId) {
      dispatch(
        unassignStudentFromClass({
          studentId: student.id,
          classId: student.classId,
        })
      );
    }

    dispatch(assignStudent({ studentId: student.id, classId }));
  } catch (error) {
    enqueueSnackbar("an error occurred while assigining student", {
      variant: "error",
    });
    console.log(error);
  }
};

export const handleDeleteStudent = async (
  student: IStudentInfo,
  dispatch: Dispatch
) => {
  try {
    await studentsService.deleteStudentById(student.id);
    dispatch(removeStudent(student.id));

    if (student.classId) {
      dispatch(
        unassignStudentFromClass({
          studentId: student.id,
          classId: student.classId,
        })
      );
    }
  } catch (error) {
    enqueueSnackbar("an error occurred while removing student", {
      variant: "error",
    });
    console.log(error);
  }
};

export const handleUnassignStudent = async (
  studentId: string,
  classroom: IClassesInfo,
  dispatch: Dispatch
) => {
  try {
    await studentsService.unassignStudent(studentId);
    dispatch(unassignStudentFromClass({ studentId, classId: classroom.id }));
    dispatch(unassignStudent(studentId));
  } catch (error) {
    enqueueSnackbar("an error occurred while unassiging student", {
      variant: "error",
    });
    console.log(error);
  }
};
