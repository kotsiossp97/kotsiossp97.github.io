import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import ProjectCodingImg from "../static/projectCoding.jpg";

const ProjectCard = (props) => {
  const project = props.project;
  const img = project?.image ? project.image : ProjectCodingImg;

  const handleButtonClick = () => {
    window.open(project.link, "_blank");
  };
  return (
    <Card
      sx={{
        display: "flex",
        // height: "100%",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column-reverse",
          sm: "column-reverse",
          md: "row",
        },
      }}
      raised
    >
      <Box sx={{ display: "flex", flexDirection: "column", flex: 2 }}>
        <CardContent sx={{ flex: "1" }}>
          <Typography variant="h5" fontWeight="bold">
            {project.title}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {project.date}
          </Typography>
          <Typography>{project.description}</Typography>
        </CardContent>
        <CardActions>
          {project.link !== "" && (
            <Button onClick={handleButtonClick}>See More</Button>
          )}
        </CardActions>
      </Box>
      <Box
        sx={{
          height: {
            xs: "200px",
            md: "auto",
          },
          width: {
            sm: "100%",
            md: "max(30%, 200px)",
          },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            aspectRatio: "1",
            width: "100%",
            height: "100%",
          }}
          image={img}
        />
      </Box>
    </Card>
  );
};

export default ProjectCard;
