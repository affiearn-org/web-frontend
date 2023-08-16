import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import { Stack, Box, Button, Typography, Container, Link } from "@mui/material";
import { StyledContainer } from "../../styleComponents";
const Menu = () => (
  <>
    <Link
      component={NavLink}
      to="/about"
      sx={{
        "&:hover": { color: "#FF4820" },
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        mr: "10px",
      }}
    >
      About
    </Link>

    <Link
      component={NavLink}
      to="/guide"
      sx={{
        "&:hover": { color: "#FF4820" },
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        mr: "10px",
      }}
    >
      Guide
    </Link>

    <Link
      component={NavLink}
      to="/faq"
      sx={{
        "&:hover": { color: "#FF4820" },
        textDecoration: "none",
        color: "white",
        fontSize: "16px",
        mr: "10px",
      }}
    >
      FAQ
    </Link>

    <p>
      <Link
        component={NavLink}
        to="/contact"
        sx={{
          "&:hover": { color: "#FF4820" },
          textDecoration: "none",
          color: "white",
          fontSize: "16px",
          mr: "10px",
        }}
      >
        Contact us
      </Link>
    </p>
  </>
);
const Navbar = () => {
  return (
    <StyledContainer
      maxWidth="2xl"
      className="navbar-main"
      sx={{ padding: "15px 10px", position:"fixed", zIndex:"2"}}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{ justifyContent: "space-between", marginLeft:"40px", alignItems: "center" }}
        className="navbar-content"
      >
        <Stack direction="row" spacing={4} sx={{ alignItems: "center" }}>
          <Box className="logo">
            <Link component={NavLink} to="/"
            sx={{
              "&:hover": { color: "#FF4820" },
              textDecoration: "none",
              color: "white",
            }}>
              <Typography
                variant="p"
                component="p"
                sx={{ color: "white", fontSize: "18px" }}
              >
                AFFIEARN
              </Typography>
            </Link>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "center" }}
            className="nav-links"
          >
            <Menu />
          </Stack>
        </Stack>

        <Box>
          <Link
            component={NavLink}
            to="/signin"
            sx={{
              "&:hover": { color: "#FF4820" },
              textDecoration: "none",
              color: "white",
              mr: "10px",
            }}
          >
            <Button variant="contained" sx={{  "&:hover": { bgcolor: "#FF4820" }, fontSize: "16px", bgcolor: "#FF4820", mr: "10px",  borderRadius:"10px" }}>
              Sign in
            </Button>
          </Link>
          <Link
            component={NavLink}
            to="/signup"
            sx={{
             
              textDecoration: "none",
              color: "white",
              mr: "10px",
            }}
          >
            <Button variant="contained"  sx={{ "&:hover": { bgcolor: "#FF4820" }, fontSize: "16px",  borderRadius:"10px", bgcolor: "#FF4820" }}>
              Sign up
            </Button>
          </Link>
        </Box>
      </Stack>
    </StyledContainer>
  );
};

export default Navbar;
