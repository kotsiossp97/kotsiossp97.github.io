import { Box, Typography } from '@mui/material'
import React from 'react'

const UnderDevSwitch = (props) => {
    const isUnderDev = props.isUnderDev
    const renderComp = props.component

    return (
        isUnderDev?
            <Box flexGrow={1} alignItems="center"  display="flex" justifyContent="center" flexDirection="column" >
                    <Typography variant='h2' textAlign="center">🚧 Under development... 🚧</Typography>
            </Box>:renderComp
    )
}

export default UnderDevSwitch