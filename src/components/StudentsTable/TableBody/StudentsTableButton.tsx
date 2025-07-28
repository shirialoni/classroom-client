import { FC } from "react";
import { Button } from "@mui/material";
import { useStyles } from "../StudentTable.style";

interface IStudentsTableButtonProps {
  title: string;
  onClick: () => void;
}

const StudentsTableButton: FC<IStudentsTableButtonProps> = ({
  title,
  onClick,
}) => {
  const styles = useStyles();

  return (
    <>
      <Button
        variant="outlined"
        size="large"
        onClick={onClick}
        style={styles.button}
      >
        {title}
      </Button>
    </>
  );
};
export default StudentsTableButton;
