import { Box } from "@mui/material";
import React from "react";

const MainContent: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
      }}
    >
      {props.children}
    </Box>
  );
};

export default MainContent;
