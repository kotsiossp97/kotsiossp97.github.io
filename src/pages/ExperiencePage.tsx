import React from "react";
import PageContent from "@/components/PageContent";
import { Fade, Grid } from "@mui/material";
import MyExperience from "@/static/MyExperience";
import ExperienceCard from "@/components/ExperienceCard";

const ExperiencePage: React.FC = () => {
  return (
    <PageContent title="Experience">
      <Grid
        container
        spacing={4}
        sx={{ marginTop: 3, justifyContent: "center" }}
      >
        {MyExperience.map((job, i) => (
          <Fade in timeout={500 + i * 500} key={job.company}>
            <Grid size={{ xs: 12, sm: 8 }} sx={{ minWidth: 0 }}>
              <ExperienceCard job={job} />
            </Grid>
          </Fade>
        ))}
      </Grid>
    </PageContent>
  );
};

export default ExperiencePage;
