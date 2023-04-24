import { Google, Instagram, LinkedIn } from '@mui/icons-material'
import { AppBar, Box, IconButton, Stack, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'

import SocialLinks from '../static/SocialLinks'

const Footer = () => {


    const handleLinkClick = (event, href) => {
        window.open(href, "_blank")
    }

    return (
        <AppBar position='fixed' sx={{bottom:0 , top: "auto"}}>
            <Toolbar>
                <Box sx={{display: "flex", flexGrow: 1, justifyContent:"center"}}>
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center">
                        <Stack direction="row">
                            { SocialLinks.map ( link => (
                                <Tooltip key={link.name} title={link.tooltip} arrow>
                                    <IconButton size='large' color='inherit' onClick={(ev)=> handleLinkClick(ev, link.href)}>
                                        {link.icon}
                                    </IconButton>
                                </Tooltip>
                            ))}
                        </Stack>

                        <Typography variant='caption'>©️ Konstantinos Andreou, 2023</Typography>
                    </Stack>

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Footer