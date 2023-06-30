import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import CodeImg from '../static/projectCoding.jpg'

const VideoWithOverlay = (props) => {
  const [screenSize, setScreenSize] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  
  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(()=> {
    if(screenSize <= 1000){
      setShowVideo(false);
    }
    else{
      setShowVideo(true);
    }
  }, [screenSize])

  return (
    <Box display="flex" alignItems="center" flexGrow={1} flexDirection="column" bgcolor="#121212">
      <Box flexGrow={1} display="flex" alignItems="center" maxWidth="95vw" >
        { showVideo && <video  height="100%"  src={props.videoSrc} autoPlay loop muted playsInline style={{ objectFit: "cover", overflow: "hidden"}}/>}

        
        { !showVideo && 
          <>
            <img src={CodeImg} alt='code' height="100%" style={{objectFit: "cover", overflow: "hidden"}} ></img>
            <Box display="flex" justifyContent="center" position="absolute" bottom="50%" left="0" width="100%">
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Typography className='glow' variant='h3' color="primary.main" fontWeight="bold">{props.title}</Typography>
                    <Typography className='glow'  variant="h7" color="secondary.light" noWrap >{props.subtitle}</Typography>
                </Box>
            </Box>
          </>
        }

        { props.children }
      </Box>
    </Box>
  )
}

export default VideoWithOverlay