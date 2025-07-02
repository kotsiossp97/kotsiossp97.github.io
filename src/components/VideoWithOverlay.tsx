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
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 1000) {
      setShowVideo(false);
    } else {
      setShowVideo(true);
    }
  }, [screenSize]);

  return (
    <Box
      display="flex"
      alignItems="center"
      flexGrow={1}
      flexDirection="column"
      bgcolor="#121212"
    >
      <Box flexGrow={1} display="flex" alignItems="center">
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
              style={{ objectFit: "cover", overflow: "hidden" }}
            ></img>
            <Box
              display="flex"
              justifyContent="center"
              position="absolute"
              bottom="50%"
              left="0"
              width="100%"
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
                  fontWeight="bold"
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
