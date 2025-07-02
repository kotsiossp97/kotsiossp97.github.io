import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "./MenuDrawer";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <AppBar
      position="static"
      sx={{ flexGrow: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 1 }}
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            component="a"
            href="#"
            fontFamily="Alkatra"
            sx={{ textDecoration: "none" }}
            marginRight={2}
            variant="h4"
          >
            My Portfolio
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Typography fontFamily="Alkatra" align="right" variant="h4">
            Konstantinos Andreou
          </Typography>
        </Box>
      </Toolbar>

      <MenuDrawer
        open={drawerOpen}
        openHandler={handleDrawerOpen}
        closeHandler={handleDrawerClose}
      />
    </AppBar>
  );
};

export default Navbar;
