import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import type { IExperience } from "@/static/MyExperience";

interface IExperienceCardProps {
  job: IExperience;
}

const ExperienceCard: React.FC<IExperienceCardProps> = (props) => {
  const job = props.job;

  const image = new URL(`../assets/comanyLogos/${job.image}`, import.meta.url)
    .href;

  return (
    <Card
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", md: "nowrap" },
        height: "100%",
        width: "100%",
        justifyContent: "space-between",
      }}
      raised
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            {job.title}
          </Typography>
          <Divider />
          <Stack
            alignItems="center"
            justifyContent={"left"}
            useFlexGap
            direction="row"
            spacing={1}
            rowGap={1}
            flexWrap={"wrap"}
            divider={<Divider orientation="vertical" flexItem />}
            marginY={2}
          >
            <Typography fontSize={"70%"} variant="subtitle2">
              {job.company}
            </Typography>
            <Typography fontSize={"70%"} variant="subtitle2">
              {job.type}
            </Typography>
            <Typography fontSize={"70%"} variant="subtitle2">
              {job.from} - {job.to}
            </Typography>
            <Typography fontSize={"70%"} variant="subtitle2">
              {job.location}
            </Typography>
          </Stack>
          <Typography>{job.description}</Typography>
        </CardContent>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: { xs: "100%", md: "auto" },
          justifyContent: "center",
          margin: 2,
        }}
      >
        <Avatar
          src={image}
          sx={{ height: 95, width: 95 }}
          className="boxShadow"
        >
          {job.company.slice(0, 1)}
        </Avatar>
      </Box>
    </Card>
  );
};

export default ExperienceCard;
