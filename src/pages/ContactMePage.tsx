import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  Chip,
  Paper,
  Fade,
  useTheme,
  Stack,
  Divider,
  Avatar,
} from "@mui/material";
import { Computer, Email, LocationOn, Person } from "@mui/icons-material";
import SocialLinks from "@/static/SocialLinks";
import MyDetails from "@/static/MyDetails";
import PageContent from "@/components/PageContent";

const ContactMePage: React.FC = () => {
  const theme = useTheme();

  return (
    <PageContent title="Get In Touch">
      <Fade in timeout={1000}>
        <Box>
          {/* Header Section */}
          <Box textAlign="center" mb={6} mt={3}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              I'm always interested in new opportunities and exciting projects.
              Let's connect and discuss how we can work together!
            </Typography>
          </Box>

          <Box mb={6}>
            {/* Personal Info Card */}
            <Card
              elevation={4}
              sx={{
                height: "100%",
                background: `linear-gradient(135deg, ${
                  theme.palette.background.paper
                } 0%, ${
                  theme.palette.mode === "dark"
                    ? "rgba(252, 175, 37, 0.05)"
                    : "rgba(252, 175, 37, 0.02)"
                } 100%)`,
                border: `1px solid ${
                  theme.palette.mode === "dark"
                    ? "rgba(252, 175, 37, 0.1)"
                    : "rgba(252, 175, 37, 0.08)"
                }`,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box display="flex" alignItems="center" mb={3}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 56,
                      height: 56,
                      mr: 2,
                    }}
                    src="https://avatars.githubusercontent.com/u/72583894"
                  >
                    <Person fontSize="large" />
                  </Avatar>
                  <Box>
                    <Typography variant="h5" fontWeight="bold">
                      {MyDetails.name} {MyDetails.surname}
                    </Typography>
                    <Chip
                      label={MyDetails.jobTitle}
                      color="primary"
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  </Box>
                </Box>

                <Stack spacing={2}>
                  <Box display="flex" alignItems="center">
                    <Email color="primary" sx={{ mr: 2 }} />
                    <Typography variant="body1">{MyDetails.email}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <LocationOn color="primary" sx={{ mr: 2 }} />
                    <Typography variant="body1">
                      {MyDetails.location}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Computer color="primary" sx={{ mr: 2 }} />

                    <Stack
                      direction={"row"}
                      spacing={0.5}
                      flexWrap={"wrap"}
                      rowGap={1}
                      useFlexGap
                    >
                      {MyDetails.coding.map((lang, i) => (
                        <Chip
                          key={i}
                          label={lang}
                          color="default"
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </Box>
                </Stack>

                <Divider sx={{ my: 3 }} />

                <Typography
                  variant="body2"
                  color="text.secondary"
                  lineHeight={1.6}
                >
                  Passionate about creating innovative solutions and always
                  eager to learn new technologies. Whether you have a project in
                  mind or just want to say hello, I'd love to hear from you!
                </Typography>
              </CardContent>
            </Card>
          </Box>

          {/* Social Media Links Card */}
          <Box mb={6}>
            <Card
              elevation={4}
              sx={{
                background: `linear-gradient(135deg, ${
                  theme.palette.background.paper
                } 0%, ${
                  theme.palette.mode === "dark"
                    ? "rgba(234, 180, 100, 0.05)"
                    : "rgba(234, 180, 100, 0.02)"
                } 100%)`,
                border: `1px solid ${
                  theme.palette.mode === "dark"
                    ? "rgba(234, 180, 100, 0.1)"
                    : "rgba(234, 180, 100, 0.08)"
                }`,
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  textAlign="center"
                  mb={3}
                >
                  Connect With Me
                </Typography>

                <Stack
                  justifyContent={"center"}
                  alignItems={"stretch"}
                  useFlexGap
                  direction={"row"}
                  spacing={3}
                  flexWrap={"wrap"}
                >
                  {SocialLinks.map((link, index) => (
                    <Box key={link.name} flex={1}>
                      <Fade in timeout={1500 + index * 500}>
                        <Paper
                          elevation={2}
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 3,
                            height: "100%",
                            textAlign: "center",
                            transition: "all 0.5s ease-in-out",
                            cursor: "pointer",
                            textDecoration: "none",
                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow: theme.shadows[8],
                              bgcolor:
                                theme.palette.mode === "dark"
                                  ? "rgba(252, 175, 37, 0.1)"
                                  : "rgba(252, 175, 37, 0.05)",
                            },
                          }}
                          component="a"
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconButton
                            size="large"
                            sx={{
                              color: theme.palette.primary.main,
                              mb: 1,
                              "&:hover": {
                                bgcolor: "transparent",
                              },
                            }}
                          >
                            {link.icon}
                          </IconButton>
                          <Typography
                            variant="body2"
                            fontWeight="medium"
                            textTransform="capitalize"
                            color="text.primary"
                          >
                            {link.name}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ display: "block", mt: 0.5 }}
                          >
                            {link.tooltip}
                          </Typography>
                        </Paper>
                      </Fade>
                    </Box>
                  ))}
                </Stack>

                {/* <Grid container spacing={3}>
                    
                  </Grid> */}
              </CardContent>
            </Card>
          </Box>

          {/* Call to Action Section */}
          <Box textAlign="center">
            <Paper
              elevation={3}
              sx={{
                p: 4,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
                border: `1px solid ${theme.palette.primary.main}30`,
              }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Ready to Start Something Amazing?
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3}>
                I'm currently available for new opportunities and
                collaborations. Let's build something great together!
              </Typography>
              <Box
                component="a"
                href="mailto:kotsiossp@gmail.com"
                sx={{
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    px: 4,
                    py: 2,
                    bgcolor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: theme.shadows[6],
                      bgcolor: theme.palette.primary.dark,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    alignItems={"center"}
                    display="flex"
                  >
                    <Email fontSize="large" sx={{ mr: 1 }} />
                    Send Me an Email
                  </Typography>
                </Paper>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Fade>
    </PageContent>
  );
};

export default ContactMePage;
