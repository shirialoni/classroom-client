import { FC } from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStyles } from "./ClassCardActions.style";
import { Button, CardActions, IconButton } from "@mui/material";
import { IClassesInfo } from "../../../interfaces/class.interface";
import { handleDeleteClass } from "../../../redux/actions/class.actions";

interface IClassCardActionsProps {
  classroom: IClassesInfo;
  setClassroom: React.Dispatch<React.SetStateAction<IClassesInfo | null>>;
}

const ClassCardActions: FC<IClassCardActionsProps> = ({
  classroom,
  setClassroom,
}) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  return (
    <>
      <CardActions>
        <Button
          color="inherit"
          size="large"
          onClick={() => setClassroom(classroom)}
        >
          Students list
        </Button>
        <IconButton
          onClick={() => handleDeleteClass(classroom.id, classroom, dispatch)}
          style={styles.button}
        >
          <DeleteIcon sx={styles.deleteIcon} />
        </IconButton>
      </CardActions>
    </>
  );
};

export default ClassCardActions;
