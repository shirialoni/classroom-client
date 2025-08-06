import {
  Box,
  Table,
  Paper,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  TableContainer,
  CircularProgress,
} from "@mui/material";

import {
  FETCH_STUDENT,
  STUDENT_FIELDS,
} from "../../constants/student.const.ts";

import { useDispatch } from "react-redux";
import { useMemo, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useStyles } from "./StudentTable.style.ts";
import SchoolIcon from "@mui/icons-material/School";
import { useFetchData } from "../../hooks/fetch-data.hook.ts";
import { FETCH_CLASS } from "../../constants/class.const.ts";
import StudentsTableRow from "./TableBody/StudentsTableBody.tsx";
import { IStudentInfo } from "../../interfaces/student.interface.ts";
import ClassroomDialog from "../ClassroomDialog/ClassroomDialog.tsx";
import { handleAssignStudent } from "../../redux/actions/student.actions.ts";
import { DIALOG_HEADER } from "../ClassroomDialog/constants/dialog.const.ts";

const StudentsTable = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { initData: classes } = useFetchData(FETCH_CLASS);
  const { initData: students, isLoading } = useFetchData(FETCH_STUDENT);

  const [selectedStudent, setSelectedStudent] = useState<IStudentInfo | null>(
    null
  );

  const availableClasses = useMemo(() => {
    if (selectedStudent === null) {
      return [];
    }

    return classes.filter(
      (classroom) =>
        classroom.id !== selectedStudent.classId &&
        classroom.students.length < classroom.occupancy
    );
  }, [selectedStudent, classes]);

  return (
    <>
      {!isLoading ? (
        <TableContainer component={Paper} sx={styles.tableCard}>
          <Table>
            <TableHead>
              <TableRow>
                {STUDENT_FIELDS.map((field) => {
                  return (
                    <TableCell key={field.key} align="center">
                      {field.label}
                    </TableCell>
                  );
                })}
                <TableCell align="center">Assign</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <StudentsTableRow
                  key={student.id}
                  student={student}
                  setStudent={setSelectedStudent}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={styles.loaderArea}>
          <CircularProgress sx={styles.loader} size="20rem" />
        </Box>
      )}
      {selectedStudent && (
        <ClassroomDialog
          button={<AddIcon style={styles.button} />}
          avatar={<SchoolIcon />}
          header={DIALOG_HEADER.STUDENT_PAGE}
          onClose={() => setSelectedStudent(null)}
          onButtonClick={async (classId: string) => {
            setSelectedStudent(null);
            await handleAssignStudent(
              Number(classId),
              selectedStudent,
              dispatch
            );
          }}
          dialogData={availableClasses.map((curClass) => {
            return {
              id: String(curClass.id),
              name: curClass.name,
            };
          })}
        />
      )}
    </>
  );
};

export default StudentsTable;
