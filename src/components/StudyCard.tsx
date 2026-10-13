import type { IEducation } from "@/static/MyEducation";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

interface IStudyCardProps {
  study: IEducation;
}

const StudyCard: React.FC<IStudyCardProps> = ({ study }) => {
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
          <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
            {study.institution}
          </Typography>
          <Divider />
          <Stack
            useFlexGap
            direction="row"
            spacing={1}
            divider={<Divider orientation="vertical" flexItem />}
            sx={{
              justifyContent: "left",
              alignItems: "center",
              flexWrap: "wrap",
              marginY: 2,
              rowGap: 1,
            }}
          >
            <Typography variant="subtitle2">
              Studied from {study.startYear} to {study.endYear}
            </Typography>
            <Typography variant="subtitle2">Degree: {study.degree}</Typography>
            {study.grade && (
              <Typography variant="subtitle2">
                Grade: {study.grade} / {study.gradeBase}
              </Typography>
            )}
          </Stack>
        </CardContent>
      </Box>
      {study.logo && (
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
            src={study.logo}
            alt={study.institution}
            sx={{ height: 95, width: 95 }}
            className="boxShadow"
          >
            {study.institution.slice(0, 1)}
          </Avatar>
        </Box>
      )}
    </Card>
  );
};

export default StudyCard;
