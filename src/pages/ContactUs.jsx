import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

function ContactUs() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        gap={3}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#184655" }}
        >
          Contact Us
        </Typography>

        <Typography variant="body1" color="textSecondary" textAlign="center">
          Have questions, suggestions, or just want to say hi? Fill out the form
          below!
        </Typography>

        <TextField
          label="Name"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#184655",
              },
            },
            "& label.Mui-focused": {
              color: "#184655",
            },
          }}
        />
        <TextField
          label="Email"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#184655",
              },
            },
            "& label.Mui-focused": {
              color: "#184655",
            },
          }}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#184655",
              },
            },
            "& label.Mui-focused": {
              color: "#184655",
            },
          }}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{
            textTransform: "none",
            fontSize: "1.2rem",
            py: 1.5,
            backgroundColor: "#184655",
            color: "#fff",
            borderRadius: "5px",
            width: "100%",
            "&:hover": {
              backgroundColor: "#163d4d",
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default ContactUs;
