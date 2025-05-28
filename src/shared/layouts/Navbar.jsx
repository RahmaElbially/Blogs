import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, NavLink, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/categories" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  // Get User Data From Local Storage
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token;
  const userImage = localStorage.getItem('userImage');

  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle Logout
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userImage');

    navigate('/login');
  }

  const drawer = (
    <Box
      sx={{
        width: 280,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
      onClick={handleDrawerToggle}
    >
      <Box sx={{ textAlign: "center", mb: 2 }}>
        {isLoggedIn ? (
          <IconButton component={Link} to="/profile">
            <Avatar
              src={userImage}
              sx={{
                width: 60,
                height: 60,
                mx: "auto",
                border: "2px solid #CEEAE4",
              }}
            />
          </IconButton>
        ) : (
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              color: "#184655",
              textDecoration: "none",
              fontWeight: "bold",
              fontFamily: "Jacques Francois, serif",
            }}
          >
            InkZone
          </Typography>
        )}
      </Box>

      <List>
        {navLinks.map((item) => (
          <ListItem
            button
            key={item.name}
            component={NavLink}
            to={item.path}
            sx={{
              textAlign: "center",
              color: "#184655",
              mb: 1,
              "&:hover": { backgroundColor: "#CEEAE4", borderRadius: "5px" },
              "&.active": { backgroundColor: "#CEEAE4", borderRadius: "5px" },
            }}
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>

      <Box sx={{ textAlign: "center", mt: 2 }}>
        {isLoggedIn ? (
          <Button
            onClick={handleLogout}
            variant="outlined"
            fullWidth
            sx={{
              borderColor: "#184655",
              color: "#184655",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#184655",
                borderColor: "#184655",
                color: "#fff",
              },
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            fullWidth
            sx={{
              borderColor: "#184655",
              color: "#184655",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#184655",
                borderColor: "#184655",
                color: "#fff",
              },
            }}
          >
            Login
          </Button>
        )}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          py: 1,
        }}
      >
        <Container
          sx={{
            px: "0 !important",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >

            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                color: "#184655",
                textDecoration: "none",
                fontWeight: "bold",
                fontFamily: "Jacques Francois, serif",
              }}
            >
              InkZone
            </Typography>


            {/* Burger Menue */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: "none" }, color: "#184655" }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              {navLinks.map((item) => (
                <Button
                  key={item.name}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    color: "#184655",
                    px: 2,
                    fontSize: "16px",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#CEEAE4",
                    },
                    "&.active": {
                      backgroundColor: "#CEEAE4",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
              {isLoggedIn ? (
                <IconButton
                  onClick={() => setShowMenu((prev) => !prev)}
                  sx={{ cursor: "pointer" }}>
                  <Avatar src={userImage} />
                  {showMenu && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: "100%",
                        right: 0,
                        bgcolor: "background.paper",
                        boxShadow: 3,
                        borderRadius: 1,
                        mt: 1,
                        width: 120,
                        zIndex: 10,
                        p: 1,
                      }}
                    >
                      <Button
                        fullWidth
                        component={Link}
                        to="/profile"
                        onClick={() => setShowMenu(false)}
                        sx={{ justifyContent: "flex-start", textTransform: "capitalize" }}
                      >
                        Profile
                      </Button>
                      <Button
                        fullWidth
                        onClick={handleLogout}
                        sx={{ justifyContent: "flex-start", textTransform: "capitalize" }}
                      >
                        Logout
                      </Button>
                    </Box>
                  )}
                </IconButton>
              ) : (
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  sx={{
                    borderColor: "#184655",
                    color: "#184655",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    px: 4,
                    "&:hover": {
                      backgroundColor: "#184655",
                      borderColor: "#184655",
                      color: "#fff",
                    },
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
