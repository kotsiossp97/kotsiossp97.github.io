import { Box, Typography } from '@mui/material'

const VideoWithOverlay = (props) => {
  return (
    <Box display="flex" alignItems="center" flexGrow={1} flexDirection="column" bgcolor="#121212">
      <Box flexGrow={1} display="flex" alignItems="center" >
        <video  height="100%" src={props.videoSrc} autoPlay loop muted playsInline style={{ objectFit: "cover", overflow: "hidden"}}/>
        <Box display="flex" justifyContent="center" position="absolute" bottom="50%" left="0" width="100%">
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Typography variant='h3' fontWeight="bold">{props.title}</Typography>
                <Typography variant="h5" >{props.subtitle}</Typography>
            </Box>
        </Box>

        { props.children }
      </Box>
        {/* <Box zIndex={1} position="relative" width="100%" height="100%">


        </Box> */}
    </Box>
  )
}

export default VideoWithOverlay