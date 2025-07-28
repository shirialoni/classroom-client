import { useState } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "./ClassesPage.style.ts";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import { Box, CircularProgress } from "@mui/material";
import { FETCH_CLASS } from "../../constants/class.const.ts";
import { useFetchData } from "../../hooks/fetch-data.hook.ts";
import ClassCard from "../../components/ClassCard/ClassCard.tsx";
import { IClassesInfo } from "../../interfaces/class.interface.ts";
import { handleUnassignStudent } from "../../redux/actions/student.actions.ts";
import ClassroomDialog from "../../components/ClassroomDialog/ClassroomDialog.tsx";
import { DIALOG_HEADER } from "../../components/ClassroomDialog/constants/dialog.const.ts";

const ClassesPage = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const { initData: classes, isLoading } = useFetchData(FETCH_CLASS);

  const [selectedClassroom, setSelectedClassroom] =
    useState<IClassesInfo | null>(null);

  const studentsDialogData = (classroom: IClassesInfo) => {
    const currentClass = classes.find(
      (curClass) => curClass.id === classroom.id
    );

    if (!currentClass) {
      return [];
    }

    return currentClass.students.map((student) => {
      return {
        id: student.id,
        name: `${student.firstName} ${student.lastName}`,
      };
    });
  };
  return (
    <>
      {!isLoading ? (
        <Box sx={styles.main}>
          {classes.map((classroom) => (
            <ClassCard
              key={classroom.id}
              classroom={classroom}
              setClassroom={setSelectedClassroom}
            />
          ))}
        </Box>
      ) : (
        <Box sx={styles.loaderArea}>
          <CircularProgress sx={styles.loader} size="20rem" />
        </Box>
      )}
      {selectedClassroom && (
        <ClassroomDialog
          button={<DeleteIcon style={styles.button} />}
          avatar={<PersonIcon />}
          header={DIALOG_HEADER.CLASS_PAGE}
          onClose={() => setSelectedClassroom(null)}
          onButtonClick={async (studentId: number | string) => {
            await handleUnassignStudent(
              "" + studentId,
              selectedClassroom,
              dispatch
            );
          }}
          dialogData={studentsDialogData(selectedClassroom)}
        />
      )}
    </>
  );
};

export default ClassesPage;
