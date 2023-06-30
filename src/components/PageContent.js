import { Container, Divider, Typography } from '@mui/material'
import React from 'react'

const PageContent = (props) => {
  return (
    <Container sx={{paddingTop: 4}} maxWidth="xl" >
      <Typography color="primary.main" fontWeight="bold" variant='h3' gutterBottom>{props.title}</Typography>
      <Divider />
       {props.children}
    </Container>
  )
}

export default PageContent