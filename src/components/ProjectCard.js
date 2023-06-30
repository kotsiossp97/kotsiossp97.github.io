import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import ProjectCodingImg from '../static/projectCoding.jpg'

const ProjectCard = (props) => {
    const project = props.project
    const img = project?.image?project.image:ProjectCodingImg

    const handleButtonClick = () => {
        window.open(project.link, "_blank")
    }
    return (
        <Card sx={{ display: 'flex', height: "100%", minWidth: "20rem", justifyContent: "space-between"}} >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography variant='h5' fontWeight="bold" >{project.title}</Typography>
                    <Typography variant='subtitle2' gutterBottom>{project.date}</Typography>
                    <Typography >{project.description}</Typography>
                </CardContent>
                <CardActions>
                    {
                        project.link !== "" &&
                        <Button onClick={handleButtonClick}>See More</Button>
                    }
                </CardActions>
            </Box>
            <CardMedia  
                component="img"
                sx={{ width: "40%" }} 
                image={img} />
        </Card>
    )
}



export default ProjectCard