import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import { LightMode, SettingsBrightness, DarkMode } from '@mui/icons-material';
import { useStateContext } from '../context/ApplicationContext';
import Links from '../static/Links';

const MenuDrawer = (props) => {

    const handleOpen = () => {
        props.openHandler()
    }

    const handleClose = () =>{
        props.closeHandler()
    }

    const { theme, setTheme, activeLink, setActiveLink } = useStateContext();

    const handleThemeChange = (event, newTheme) =>{
        setTheme(newTheme)
    }

    const handleLinkClick = (event, newIndex) =>{
        setActiveLink(newIndex)
        props.closeHandler()
    }

    return (
        <SwipeableDrawer
            open={props.open}
            anchor="left"
            onClose={handleClose}
            onOpen={handleOpen}
            sx={{ marginX: 10}}
            disableSwipeToOpen={false}
        >
            <Box
                sx={{ width: "auto", marginX: 3, marginTop:3}}
            >
                <List subheader="LINKS">
                    {Links.map((link, index) => (
                        <ListItem key={link.name}>
                            <ListItemButton href={link.href} selected={activeLink === index} onClick={(ev)=>handleLinkClick(ev,index)}>
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText>{link.name}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider sx={{ marginBottom: 2}}/>
                <List subheader="SETTINGS" >
                    <ListItem>
                        <Box>
                            <ListItemText>Mode</ListItemText>
                            <ToggleButtonGroup value={theme} exclusive onChange={handleThemeChange} color='primary'>
                                <ToggleButton value="light" sx={{textTransform: "none"}}    ><LightMode sx={{marginRight: 2}} /> Light</ToggleButton>
                                <ToggleButton value="system" sx={{textTransform: "none"}}   ><SettingsBrightness sx={{marginRight: 2}} /> System</ToggleButton>
                                <ToggleButton value="dark" sx={{textTransform: "none"}}     ><DarkMode sx={{marginRight: 2}} /> Dark</ToggleButton>
                            </ToggleButtonGroup>

                        </Box>
                    </ListItem>
                </List>

            </Box>
        </SwipeableDrawer>
    )
}

export default MenuDrawer