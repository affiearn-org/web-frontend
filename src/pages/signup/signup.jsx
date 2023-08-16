import {
  Stack,
  Box,
  Button,
  Typography,
  Container,
  Link,
  TextField,
  InputAdornment,
  Divider
} from "@mui/material";
import { NavLink } from "react-router-dom";
import SIGNUPIMG from "../../images/signup.svg";
import GOOGLE from "../../images/googlec.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { StyledTextField } from "../../styleComponents";

const SignUp = () => {
  return (
    <div className="sigup">
      <Box>
        <Stack
          maxWidth="xl"
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Stack
            direction="row"
            sx={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#FF4820",
            }}
          >
            <img src={SIGNUPIMG} alt="signup" width="80%" />
          </Stack>
          <Box sx={{ width: "40%", padding: "30px 0" }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFFF",
                color:"#FF4820",
                border: "1px solid #FF4820",
                "&:hover": { bgcolor: "#ffff" },
                width: "100%",
                fontWeight: "bold",
                fontSize: "16px",
                height: "50px",
                marginLeft: "5px",
                marginTop:"80px",
                marginBottom:"20px",
                borderRadius:"10px"
              }}
            >
              <Stack 
              direction="row"
              spacing={1}
              sx={{ alignItems:"center" }}>
              <img src={GOOGLE} alt="google" width="30px" sx={{ }} />
              <Typography variant="p" component="p">
              Sign Up with Google
              </Typography>
            </Stack>
            
            </Button>
            <Divider
            sx={{ marginBottom:"20px" }}>OR</Divider>
            
            <Box>
              <div style={{ marginBottom: "10px" }}>
                <StyledTextField
                  placeholder="Enter your firstname"
                  id="outlined-start-adornment"
                  sx={{
                    m: 1,
                    width: "100%",
                    borderRadius: "35px",
                    "&:focus": { border: "none" },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <StyledTextField
                  placeholder="Enter your lastname"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <StyledTextField
                  placeholder="Enter your email"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <StyledTextField
                  placeholder="Enter your phone number"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <StyledTextField
                  placeholder="Enter your password"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <StyledTextField
                  placeholder="Confirm password"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "100%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FF4820",
                  "&:hover": { bgcolor: "#DA1439" },
                  width: "100%",
                  fontWeight: "bold",
                  fontSize: "16px",
                  height: "50px",
                  marginLeft: "5px",
                  borderRadius:"10px",
                  marginBottom:"20px"
                }}
              >
                Register
              </Button>
              <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems:"center", justifyContent:"center" }}>
                <Typography
                  component="p"
                  variant="p"
                  sx={{ textAlign: "center", fontSize: "16px" }}
                >
                  Already Have An Account?
                </Typography>
                <Link
                component={NavLink}
                to="/signin"
                 sx={{ textDecoration: "none", color: "#FF4820", fontSize:"16px",  "&:hover": { cursor: "pointer" } }}>
                    Sign In
                </Link>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default SignUp;
