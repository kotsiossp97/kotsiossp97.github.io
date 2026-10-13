import type { ICertificate } from "@/static/MyEducation";
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

interface ICertificateCardProps {
  certificate: ICertificate;
}

const CertificateCard: React.FC<ICertificateCardProps> = ({ certificate }) => {
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
            {certificate.name}
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
              Achieved in {certificate.issueYear}
            </Typography>
            <Typography variant="subtitle2">
              Issued by {certificate.issuingOrganization}
            </Typography>
            {certificate.detail && (
              <Typography variant="subtitle2">{certificate.detail}</Typography>
            )}
          </Stack>
        </CardContent>
      </Box>
      {certificate.logo && (
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
            src={certificate.logo}
            alt={certificate.name}
            sx={{ height: 95, width: 95 }}
            className="boxShadow"
          >
            {certificate.name.slice(0, 1)}
          </Avatar>
        </Box>
      )}
    </Card>
  );
};

export default CertificateCard;
