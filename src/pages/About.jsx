import React from "react";
import { Container, Typography, Box } from "@mui/material";

function About() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        textAlign="center"
        gap={3}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: "#184655" }}
        >
          About This Blog
        </Typography>

        <Typography variant="body1" color="textSecondary">
          Welcome to our blog! 👋
          <br />
          This platform is created to share articles, thoughts, and insights on
          various topics. Whether you're here to read, learn, or just explore —
          we're glad to have you!
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Built with ❤️ using React and Material UI.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
