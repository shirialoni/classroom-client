import { Dispatch } from "@reduxjs/toolkit";
import { enqueueSnackbar } from "notistack";
import { removeClass } from "../slices/class.slice";
import classesService from "../../services/classes.service";
import { IClassesInfo } from "../../interfaces/class.interface";

export const handleDeleteClass = async (
  classId: number,
  classroom: IClassesInfo,
  dispatch: Dispatch
) => {
  if (classroom.students.length !== 0) {
    enqueueSnackbar("cant remove class with assigned students", {
      variant: "error",
    });
    return;
  }

  try {
    await classesService.deleteClassById(classId);
    dispatch(removeClass(classId));
  } catch (error) {
    enqueueSnackbar("an error occurred while removing class", {
      variant: "error",
    });
    console.log(error);
  }
};
