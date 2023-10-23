import { Box, Button, Divider, Stack } from '@mui/material'
import React from 'react'
import VideoWithOverlay from '../components/VideoWithOverlay';
import {  Work, WorkHistory, Contacts  } from "@mui/icons-material"
import helloVideo from '../static/Hello.mp4';

const HomePage = () => {
  return (
    <Box display="flex" flexDirection={"column"} flexGrow={1} >
        <VideoWithOverlay videoSrc={helloVideo} title="Hello, I'm Konstantinos" subtitle="🖥️ Software Engineer | 💡 Electrical Engineer">
            <Box position="absolute" bottom={100} left="0" width="100%" >
                <Stack display="flex"justifyContent="center" direction="row" spacing={{xs:.5, md:3, lg: 5}} divider={<Divider  orientation="vertical" flexItem />}>
                    <Button variant='contained' href="#projects" type='button' startIcon={<Work />} >Projects</Button>
                    <Button variant='contained' href="#experience" type='button' startIcon={<WorkHistory />} >Experience</Button>
                    <Button variant='contained' href="#contactme" type='button' startIcon={<Contacts />} >Contact</Button>
                </Stack>
            </Box>
        </VideoWithOverlay>
    </Box>
  )
}

export default HomePage