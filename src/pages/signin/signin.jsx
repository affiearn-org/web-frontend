import {
  Stack,
  Box,
  Button,
  Typography,
  Container,
  Link,
  TextField,
  InputAdornment,
  Divider,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import LOGINIMG from "../../images/loginp.svg";
import GOOGLE from "../../images/googlec.png";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { StyledTextField } from "../../styleComponents";
const SignIn = () => {
  return (
    <div className="siginin">
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
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "#FF4820",
            }}
          >
            <img src={LOGINIMG} alt="signup" width="70%" />
          </Stack>
          <Box sx={{ width: "40%", padding: "30px 0" }}>
            <Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FFFF",
                  color: "#FF4820",
                  border: "1px solid #FF4820",
                  "&:hover": { bgcolor: "#ffff" },
                  width: "100%",
                  fontWeight: "bold",
                  fontSize: "16px",
                  height: "50px",
                  marginLeft: "5px",
                  marginBottom: "20px",
                  marginTop:"80px",
                  borderRadius: "10px",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ alignItems: "center" }}
                >
                  <img src={GOOGLE} alt="google" width="30px" sx={{}} />
                  <Typography variant="p" component="p">
                    Sign In with Google
                  </Typography>
                </Stack>
              </Button>
              <Divider sx={{ marginBottom: "20px" }}>OR</Divider>

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

              <div style={{ marginBottom: "20px" }}>
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
              <Stack>
                <Typography variant="p" component="p"></Typography>
              </Stack>
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
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              >
                Login
              </Button>
              <Link sx={{ textDecoration: "none", color: "#040b18",  "&:hover": { cursor: "pointer" } }}>
                <Typography
                  component="p"
                  variant="p"
                  sx={{
                    textAlign: "center",
                    fontSize: "16px",
                    marginBottom: "20px",
                  }}
                >
                  Forgot Password
                </Typography>
              </Link>
              <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems:"center", justifyContent:"center" }}>
                <Typography
                  component="p"
                  variant="p"
                  sx={{ textAlign: "center", fontSize: "16px" }}
                >
                  Dont Have An Account?
                </Typography>
                <Link
                component={NavLink}
                to="/signup"
                 sx={{ textDecoration: "none", color: "#FF4820", fontSize:"16px",  "&:hover": { cursor: "pointer" } }}>
                    Sign Up
                </Link>
              </Stack>
              
            </Box>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default SignIn;
