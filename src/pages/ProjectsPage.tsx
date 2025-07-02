import React from "react";
import { Fade, Grid } from "@mui/material";
import ProjectCard from "@/components/ProjectCard";
import PageContent from "@/components/PageContent";
import { MyProjects } from "@/static/MyProjects";

const ProjectsPage: React.FC = () => {
  return (
    <PageContent title="My Projects">
      <Grid marginTop={3} container spacing={4} justifyContent="center">
        {MyProjects.map((project, i) => (
          <Fade in timeout={500 + i * 500} key={project.title}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <ProjectCard project={project} />
            </Grid>
          </Fade>
        ))}
      </Grid>
    </PageContent>
  );
};

export default ProjectsPage;
