import { Avatar, Box, Card, CardContent, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const ExperienceCard = (props) => {
    const job = props.job

    return (
        <Card sx={{ display: 'flex', height: "100%",  justifyContent: "space-between"}} raised>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant='h5' fontWeight="bold" gutterBottom>{job.title}</Typography>
                    <Divider/>
                    <Stack alignItems="center" direction="row" spacing={2} divider={<Divider  orientation="vertical" flexItem />} marginY={2}>
                        <Typography variant='subtitle2' >{job.company}</Typography>
                        <Typography variant='subtitle2' >{job.type}</Typography>
                        <Typography variant='subtitle2' >{job.from} - {job.to}</Typography>
                        <Typography variant='subtitle2' >{job.location}</Typography>
                    </Stack>
                    <Typography>
                        {job.description}
                    </Typography>
                </CardContent>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", paddingRight: 3, }}>
                <Avatar src={job.image} sx={{ height: 95, width: 95}} className='boxShadow'>{job.company.slice(0,1)}</Avatar>
            </Box>
        </Card>
    )
}

export default ExperienceCard