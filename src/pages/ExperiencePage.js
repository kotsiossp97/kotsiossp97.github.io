import React from 'react'
import PageContent from '../components/PageContent'
import { Grid } from '@mui/material'
import MyExperience from '../static/MyExperience'
import ExperienceCard from '../components/ExperienceCard'

const ExperiencePage = () => {
    return (
        <PageContent title="Experience">
            <Grid marginTop={3} spacing={4} justifyContent="center" container >
                {MyExperience.map( job => (
                    <Grid item xs={12} sm={8} key={job.company} zeroMinWidth>
                        <ExperienceCard job={job}/>
                    </Grid>
                ))}
            </Grid>
        </PageContent>
    )
}

export default ExperiencePage