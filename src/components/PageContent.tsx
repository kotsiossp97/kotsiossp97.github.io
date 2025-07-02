import { Container, Divider, Typography } from "@mui/material";
import React from "react";

interface IPageContentProps extends React.PropsWithChildren {
  title?: string;
}

const PageContent: React.FC<IPageContentProps> = ({ title, children }) => {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 15 }} maxWidth="xl">
      {title && (
        <>
          <Typography
            color="primary.main"
            fontWeight="bold"
            variant="h3"
            gutterBottom
          >
            {title}
          </Typography>
          <Divider />
        </>
      )}
      {children}
    </Container>
  );
};

export default PageContent;
