import { FC } from "react";
import { Card } from "@mui/material";
import { useStyles } from "./ClassCard.style";
import { IClassesInfo } from "../../interfaces/class.interface";
import ClassCardContent from "./ClassCardContent/ClassCardContent";
import ClassCardActions from "./ClassCardActions/ClassCardActions";

interface IClassCardProps {
  classroom: IClassesInfo;
  setClassroom: React.Dispatch<React.SetStateAction<IClassesInfo | null>>;
}

const ClassCard: FC<IClassCardProps> = ({ classroom, setClassroom }) => {
  const styles = useStyles();

  return (
    <>
      <Card sx={styles.card}>
        <ClassCardContent classroom={classroom} />
        <ClassCardActions classroom={classroom} setClassroom={setClassroom} />
      </Card>
    </>
  );
};

export default ClassCard;
