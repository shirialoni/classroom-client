import {
  Box,
  List,
  Drawer,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";

import { FC } from "react";
import { useStyles } from "./AppMenu.style";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../router/constants/router.const.ts";

interface IAppMenuProps {
  openDrawer: boolean;
  toggleDrawer: (newOpen: boolean) => () => void;
}

const AppMenu: FC<IAppMenuProps> = ({ toggleDrawer, openDrawer }) => {
  const styles = useStyles();
  const location = useLocation();

  return (
    <Drawer open={openDrawer} onClose={toggleDrawer(false)}>
      <Box sx={styles.main} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {ROUTES.map((text, index) => (
            <ListItem key={index}>
              <NavLink style={styles.menuLink} to={text.path}>
                <ListItemButton
                  disabled={`/${text.path}` === location.pathname}
                >
                  <ListItemText primary={text.path} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default AppMenu;
