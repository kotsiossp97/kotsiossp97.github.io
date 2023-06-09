import { Box } from '@mui/material'
import React from 'react'

const MainContent = (props) => {
  return (
    <Box display="flex" flexGrow={1} >
        {props.children}
    </Box>
  )
}

export default MainContent