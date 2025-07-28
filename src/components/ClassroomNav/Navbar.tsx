import { useState } from "react";
import AppMenu from "../AppMenu/AppMenu";
import { useStyles } from "./Navbar.style";
import MenuIcon from "@mui/icons-material/Menu";
import { NAV_HEADER } from "./constants/nav.const";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { usePaletteContext } from "../../contexts/palette.context";
import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";

const ClassroomNav = () => {
  const styles = useStyles();
  const { togglePalette } = usePaletteContext();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen);
  };

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar sx={styles.main}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={styles.menuIcon}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={styles.textSize} />
            </IconButton>
            <Typography variant="h3" sx={styles.textSize}>
              {NAV_HEADER}
            </Typography>
            <IconButton
              onClick={togglePalette}
              color="inherit"
              sx={styles.icon}
            >
              <LoyaltyIcon sx={styles.textSize} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      <AppMenu openDrawer={openDrawer} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default ClassroomNav;
