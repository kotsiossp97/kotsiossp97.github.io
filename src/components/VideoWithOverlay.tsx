import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CodeImg from "@/assets/projectCoding.jpg";

interface IVideoWithOverlayProps {
  videoSrc: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const VideoWithOverlay: React.FC<IVideoWithOverlayProps> = (props) => {
  const [screenSize, setScreenSize] = useState(0);
  // const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //   setShowVideo(screenSize > 1000);
  // }, [screenSize]);

  const showVideo = screenSize > 1000;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
        bgcolor: "#121212",
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        {showVideo && (
          <video
            width="100%"
            src={props.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: "cover", overflow: "hidden" }}
          />
        )}

        {!showVideo && (
          <>
            <img
              src={CodeImg}
              alt="code"
              height="100%"
              width="100%"
              style={{
                objectFit: "cover",
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
            ></img>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                bottom: "50%",
                left: "0",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                }}
              >
                <Typography
                  className="glow"
                  variant="h3"
                  color="primary.main"
                  sx={{ fontWeight: "bold" }}
                >
                  {props.title}
                </Typography>
                <Typography
                  className="glow"
                  variant="h6"
                  color="secondary.light"
                >
                  {props.subtitle}
                </Typography>
              </Box>
            </Box>
          </>
        )}

        {props.children}
      </Box>
    </Box>
  );
};

export default VideoWithOverlay;
