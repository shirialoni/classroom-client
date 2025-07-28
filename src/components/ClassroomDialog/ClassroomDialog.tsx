import {
  List,
  Avatar,
  Dialog,
  ListItem,
  IconButton,
  DialogTitle,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

import { FC, JSX } from "react";
import { IDialogData } from "./types/dialog.type";
import { useStyles } from "./ClassroomDialog.style";

interface IAssignDialogProps {
  header: string;
  avatar: JSX.Element;
  button: JSX.Element;
  onClose: () => void;
  dialogData: IDialogData[];
  onButtonClick: (id: number | string) => Promise<void>;
}

const ClassroomDialog: FC<IAssignDialogProps> = ({
  avatar,
  button,
  header,
  onClose,
  dialogData,
  onButtonClick,
}) => {
  const styles = useStyles();

  return (
    <Dialog onClose={onClose} open={true}>
      {dialogData.length !== 0 && (
        <>
          <DialogTitle sx={styles.dialogTitle}>{header}</DialogTitle>
          <List>
            {dialogData.map((data) => (
              <ListItem key={data.id}>
                <ListItemAvatar>
                  <Avatar>{avatar}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  slotProps={{ primary: { style: styles.dataName } }}
                  primary={data.name}
                />
                <IconButton onClick={() => onButtonClick(data.id)} style={{}}>
                  {button}
                </IconButton>
              </ListItem>
            ))}
          </List>
        </>
      )}
      {dialogData.length === 0 && (
        <>
          <DialogTitle sx={styles.dialogTitle}>
            {"No"} {header}
          </DialogTitle>
        </>
      )}
    </Dialog>
  );
};

export default ClassroomDialog;
