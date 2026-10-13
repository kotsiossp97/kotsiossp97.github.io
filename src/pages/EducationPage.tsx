import CertificateCard from "@/components/CertificateCard";
import StudyCard from "@/components/StudyCard";
import { Certificates, Education } from "@/static/MyEducation";
import { Box, Fade, Grid, Typography } from "@mui/material";
import React from "react";
import PageContent from "../components/PageContent";

const StudiesPage: React.FC = () => {
  return (
    <PageContent title="Education">
      <Fade in timeout={500}>
        <Box>
          <Typography variant="h4" gutterBottom>
            Studies
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{ marginTop: 3, justifyContent: "center" }}
          >
            {Education.map((study) => (
              <StudyCard study={study} key={study.institution} />
            ))}
          </Grid>
        </Box>
      </Fade>

      <Fade in timeout={1000}>
        <Box sx={{ marginTop: 5 }}>
          <Typography variant="h4" gutterBottom>
            Certificates
          </Typography>
          <Grid
            container
            spacing={4}
            sx={{ marginTop: 3, justifyContent: "center" }}
          >
            {Certificates.map((certificate) => (
              <CertificateCard
                certificate={certificate}
                key={certificate.name}
              />
            ))}
          </Grid>
        </Box>
      </Fade>
    </PageContent>
  );
};

export default StudiesPage;
