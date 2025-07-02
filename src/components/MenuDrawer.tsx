import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import {
  LightMode,
  SettingsBrightness,
  DarkMode,
  Close,
  GitHub,
} from "@mui/icons-material";
import Links from "@/static/Links";
import { useStateContext } from "@/context/ApplicationContext";

interface IMenuDrawerProps {
  open: boolean;
  openHandler: () => void;
  closeHandler: () => void;
}

const MenuDrawer: React.FC<IMenuDrawerProps> = (props) => {
  const handleOpen = () => {
    props.openHandler();
  };

  const handleClose = () => {
    props.closeHandler();
  };

  const { theme, setTheme, activeLink, setActiveLink } = useStateContext();

  const handleThemeChange = (
    _: React.MouseEvent<HTMLElement, MouseEvent>,
    newTheme: string
  ) => {
    if (newTheme !== null) {
      setTheme(newTheme);
    }
  };

  const handleLinkClick = (
    _: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    newIndex: number
  ) => {
    setActiveLink(newIndex);
    props.closeHandler();
  };

  return (
    <SwipeableDrawer
      open={props.open}
      anchor="left"
      onClose={handleClose}
      onOpen={handleOpen}
      sx={{ marginX: 10 }}
      disableSwipeToOpen={false}
    >
      <Toolbar />
      <Box sx={{ width: "auto", marginX: 3, marginTop: 3 }}>
        <List>
          <ListItem disablePadding>
            <Box
              sx={{ display: "flex", width: "100%" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>NAVIGATION</Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>
          </ListItem>
          {Links.map((link, index) => (
            <ListItem key={link.name}>
              <ListItemButton
                href={link.href}
                selected={activeLink === index}
                onClick={(ev) => handleLinkClick(ev, index)}
              >
                <ListItemIcon>{link.icon}</ListItemIcon>
                <ListItemText>{link.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ marginBottom: 2 }} />
        <List subheader="SETTINGS">
          <ListItem>
            <Box>
              <ListItemText>Mode</ListItemText>
              <ToggleButtonGroup
                value={theme}
                exclusive
                onChange={handleThemeChange}
                color="primary"
              >
                <ToggleButton value="light" sx={{ textTransform: "none" }}>
                  <LightMode sx={{ marginRight: 2 }} /> Light
                </ToggleButton>
                <ToggleButton value="system" sx={{ textTransform: "none" }}>
                  <SettingsBrightness sx={{ marginRight: 2 }} /> System
                </ToggleButton>
                <ToggleButton value="dark" sx={{ textTransform: "none" }}>
                  <DarkMode sx={{ marginRight: 2 }} /> Dark
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </ListItem>
        </List>

        <Divider sx={{ marginBottom: 2 }} />
        <List subheader="ABOUT">
          <ListItem>
            <ListItemButton
              href="https://github.com/kotsiossp97/kotsiossp97.github.io"
              target="_blank"
            >
              <ListItemIcon>
                <GitHub />
              </ListItemIcon>
              <ListItemText>View Page Source Code</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default MenuDrawer;
