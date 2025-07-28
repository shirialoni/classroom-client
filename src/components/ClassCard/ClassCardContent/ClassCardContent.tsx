import { FC } from "react";
import { useStyles } from "./ClassCardContent.style";
import { CardContent, Typography } from "@mui/material";
import { IClassesInfo } from "../../../interfaces/class.interface";

interface IClassCardContentProps {
  classroom: IClassesInfo;
}

const ClassCardContent: FC<IClassCardContentProps> = ({ classroom }) => {
  const styles = useStyles();
  const remainingSeats = classroom.occupancy - classroom.students.length;

  return (
    <CardContent>
      <Typography variant="h6" sx={styles.cardHeader} component="div">
        {classroom.name}
      </Typography>
      <Typography gutterBottom sx={styles.cardSubtitle}>
        there are <b>{remainingSeats}</b> seats left
      </Typography>
      <Typography sx={styles.cardSeconderySub}>
        out of <b>{classroom.occupancy}</b>
      </Typography>
    </CardContent>
  );
};

export default ClassCardContent;
