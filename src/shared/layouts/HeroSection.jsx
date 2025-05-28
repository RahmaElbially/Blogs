import React from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";

function HeroSection() {
  return (
    <Container>
      <Box
        my={6}
        sx={{
          backgroundColor: "#fff",
          height: { xs: "auto", md: "550px" },
          borderRadius: "10px",
          overflow: "hidden",
          transition: "box-shadow 0.3s ease",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          "&:hover": { boxShadow: 6 },
        }}
      >
        <Grid
          container
          sx={{ height: "100%", flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                p: { xs: 4, lg: 6 },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Chip
                  label="Featured"
                  sx={{
                    backgroundColor: "#e3f2fd",
                    color: "#1976d2",
                    fontWeight: "bold",
                    mr: 1,
                  }}
                />
                <Chip
                  label="Technology"
                  color="default"
                  sx={{ fontWeight: "bold" }}
                />
              </Box>

              <Typography
                variant="h3"
                component="h2"
                sx={{
                  fontWeight: "bold",
                  mb: 2,
                  fontSize: { xs: "2rem", lg: "2.5rem" },
                  lineHeight: 1.2,
                  color: '#184655'
                }}
              >
                The Future of Web Development: Trends to Watch in 2024
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  mb: 3,
                  lineHeight: 1.6,
                  fontWeight: "normal",
                }}
              >
                Explore the latest trends shaping the web development landscape,
                from AI integration to performance optimization.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    background:
                      "linear-gradient(45deg, #1976d2  10%, #184655 70%)",
                    mr: 2,
                    fontSize: "16px",
                  }}
                >
                  RE
                </Avatar>
                <Box>
                  <Typography variant="body1" fontWeight="medium">
                    Rahma Elbially
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    March 15, 2024 • 5 min read
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  background:
                    "linear-gradient(45deg, #1976d2  10%, #184655 70%)",
                  py: 1.5,
                  px: 4,
                  fontWeight: "medium",
                  borderRadius: 2,
                  textTransform: "capitalize",
                  fontSize: "16px",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  transition: "all 0.2s ease",
                  alignSelf: "flex-start",
                }}
              >
                Read Full Article
              </Button>
            </Box>
          </Grid>

          {/* Image */}
          <Grid
            item
            size={{ xs: 12, md: 6 }}
            sx={{ height: { xs: 300, sm: 400, md: "100%" } }}
          >
            <Box
              sx={{
                height: "100%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="heroSection.jpeg"
                alt="Hero Image"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(45deg, rgba(33, 150, 243, 0.2) 30%, rgba(156, 39, 176, 0.2) 90%)",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default HeroSection;

{
  /* {post.author.split(' ').map(n => n[0]).join('')} */
}
