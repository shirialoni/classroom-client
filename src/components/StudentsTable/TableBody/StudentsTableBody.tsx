import { FC } from "react";
import { useDispatch } from "react-redux";
import { TableRow, TableCell } from "@mui/material";
import StudentsTableButton from "./StudentsTableButton";
import { STUDENT_FIELDS } from "../../../constants/student.const";
import { IStudentInfo } from "../../../interfaces/student.interface";
import { ASSIGN_TITLE, DELETE_TITLE } from "../constants/table.const";
import { handleDeleteStudent } from "../../../redux/actions/student.actions";

interface IStudentsTableRowProps {
  student: IStudentInfo;
  setStudent: React.Dispatch<React.SetStateAction<IStudentInfo | null>>;
}

const StudentsTableRow: FC<IStudentsTableRowProps> = ({
  student,
  setStudent,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <TableRow key={student.id}>
        {STUDENT_FIELDS.map(({ key }) => (
          <TableCell align="center" key={key}>
            {student[key] ? student[key] : " "}
          </TableCell>
        ))}
        <TableCell align="center">
          {
            <StudentsTableButton
              title={ASSIGN_TITLE}
              onClick={() => setStudent(student)}
            />
          }
        </TableCell>
        <TableCell align="center">
          {
            <StudentsTableButton
              title={DELETE_TITLE}
              onClick={() => handleDeleteStudent(student, dispatch)}
            />
          }
        </TableCell>
      </TableRow>
    </>
  );
};

export default StudentsTableRow;
