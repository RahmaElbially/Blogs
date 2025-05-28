import {
  Box,
  Container,
  Typography,
  Grid,
  ListItem,
  ListItemText,
  List,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Categories", to: "/categories" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#184655",
        py: 4,
        mt: 8,
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, sm: 12, md: 6 }}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#fff", fontWeight: "bold" }}
            >
              InkZone
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgb(156, 163, 175)",
                width: "95%",
                fontSize: 16,
                lineHeight: 1.8,
                mt: 2,
              }}
            >
              Your go-to source for the latest in technology, development, and
              design. Stay updated with industry trends and expert insights.
            </Typography>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#fff" }}>
              Links
            </Typography>
            <List disablePadding>
              {navLinks.map(({ label, to }) => (
                <ListItem
                  key={label}
                  disableGutters
                  sx={{
                    py: 0.5,
                  }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      component: Link,
                      to,
                      sx: {
                        color: "rgb(156,163,175)",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#fff",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid item size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#fff" }}>
              Follow Us
            </Typography>
            <List disablePadding>
              {["Twitter", "LinkendIn", "Github", "RSS Feed"].map((text) => (
                <ListItem
                  key={text}
                  disableGutters
                  sx={{
                    py: 0.5,
                  }}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      component: "a",
                      href: "#",
                      sx: {
                        color: "rgb(156,163,175)",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                          color: "#fff",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "#fff", my: 3 }} />

        <Box mt={4} textAlign="center">
          <Typography variant="body2" gutterBottom sx={{ color: "#fff" }}>
            &copy; {new Date().getFullYear()} My Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
