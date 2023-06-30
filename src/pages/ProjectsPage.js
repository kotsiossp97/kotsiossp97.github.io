import React from 'react'
import PageContent from '../components/PageContent'
import { MyProjects } from '../static/MyProjects'
import { Grid } from '@mui/material'
import ProjectCard from '../components/ProjectCard'

const ProjectsPage = () => {
  return (
    <PageContent title="My Projects">
      <Grid marginTop={3} container spacing={4} justifyContent="center"  >

        {MyProjects.map( project => (
          <Grid key={project.title} item xs>
            <ProjectCard  project={project} />
          </Grid>
        ))}
        </Grid>
    </PageContent>
  )
}

export default ProjectsPage