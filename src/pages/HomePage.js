import { Box, Button } from '@mui/material'
import React from 'react'
import VideoWithOverlay from '../components/VideoWithOverlay';
import { ArrowRight } from '@mui/icons-material';
import helloVideo from '../static/Hello.mp4';

const HomePage = () => {
  return (
    <Box display="flex" flexDirection={"column"} flexGrow={1} maxWidth="100vw" >
        <VideoWithOverlay videoSrc={helloVideo} title="Hello, I'm Konstantinos" subtitle="🖥️ Software Engineer | 💡 Electrical Engineer">
            <Box position="absolute" bottom={100} left="0" width="100%" >
                <Box sx={{ display: "flex", justifyContent: "center", alignItems:"center"}}>
                    <Button variant='contained' href="#projects" type='button' startIcon={<ArrowRight />} >See More</Button>
                </Box>
            </Box>
        </VideoWithOverlay>
    </Box>
  )
}

export default HomePage