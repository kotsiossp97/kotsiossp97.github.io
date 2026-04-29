import React from "react";
import { Box, Button, Divider, Fade, Stack } from "@mui/material";
import VideoWithOverlay from "@/components/VideoWithOverlay";
import { Work, WorkHistory, Contacts } from "@mui/icons-material";
import helloVideo from "@/assets/Hello.mp4";

const HomePage: React.FC = () => {
  return (
    <Fade in timeout={1000}>
      <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <VideoWithOverlay
          videoSrc={helloVideo}
          title="Hello, I'm Konstantinos"
          subtitle="🖥️ Software Engineer | 💡 Electrical Engineer"
        >
          <Box
            sx={{ position: "absolute", bottom: 100, left: "0", width: "100%" }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                rowGap: 1,
              }}
              direction="row"
              spacing={{ xs: 0.5, md: 3, lg: 5 }}
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Button
                variant="contained"
                href="#projects"
                type="button"
                startIcon={<Work />}
              >
                Projects
              </Button>
              <Button
                variant="contained"
                href="#experience"
                type="button"
                startIcon={<WorkHistory />}
              >
                Experience
              </Button>
              <Button
                variant="contained"
                href="#contactme"
                type="button"
                startIcon={<Contacts />}
              >
                Contact
              </Button>
            </Stack>
          </Box>
        </VideoWithOverlay>
      </Box>
    </Fade>
  );
};

export default HomePage;
