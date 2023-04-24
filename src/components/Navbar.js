import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import MenuDrawer from './MenuDrawer'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerOpen = () => {
        setDrawerOpen(true)
    }

    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

    return (
        <AppBar position='static' sx={{ flexGrow: 0}}>
            <Toolbar>
                <IconButton 
                    size='large'
                    edge="start"
                    color='inherit'
                    sx={{ mr: 2 }}
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{flexGrow: 1}}>
                    <Typography component="a" href='' sx={{textDecoration: 'none', color: 'inherit',}} marginRight={2} variant='h3' fontFamily='Nanum Brush Script'>My Portfolio</Typography>

                </Box>

                <Box sx={{flexGrow: 0}}>
                    <Typography  fontFamily='Nanum Brush Script' variant='h4'>Konstantinos Andreou</Typography>
                </Box>
            </Toolbar>

            <MenuDrawer open={drawerOpen} openHandler={handleDrawerOpen}  closeHandler={handleDrawerClose}/>
        </AppBar>
  )
}

export default Navbar