import {
  Button,
  IconButton,
  Stack,
  Box,
  Typography,
  Container,
  TextField,
  Grid,
} from "@mui/material";
import { useState , useEffect } from 'react';
import { StyledText, StyledBg, StyledContainer } from "../../styleComponents";
// import SendIcon from "@mui/icons-material/Send";
// import AlarmIcon from "@mui/icons-material/Alarm";
// import Blog1 from "../../images/blog04.png";
import AI from "../../images/personl.png";
import POSSIBILITY from "../../images/possibility.png";

const Features = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setTimeout(()  => {
      setData(200);
    }, 5000);
  }, []);

  return (
    <div className="features">
      <StyledContainer maxWidth="2xl" className="Feature-section"
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-around", height:"100vh", alignItems: "center", flexWrap:"wrap" }}
        >
          <Box sx={{ width: {xs:"100%", sm:"100%", md:"45%", lg:"45%"} }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ mb: "10px", fontWeight: "bold", fontSize: "50px" }}
              className="gradient__text"
            >
             Making Digital Products Accessible
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{ mb: "25px", fontSize: "20px", color: "#81AFDD", lineHeight : "30px" }}
            >
              To enhance accessibility of digital products to users across the globe and enable
              users earn  passive income by promoting digital products.

            </Typography>
            <Stack direction="row" sx={{ alignItems:"center"}}>
              <TextField
                className="header__input"
                id="outlined-error"
                defaultValue="Courses"
                sx={{ width: "100%", flex:"2", height:"50px", border:"none"}}
              />
              <Button variant="contained" sx={{ bgcolor: "#FF4820", fontWeight:"bold", fontSize:{xs:"12px", sm:"12px", md:"16px", lg:"16px"}, flex:"0.6", height:"50px" }}>
                Search
              </Button>
            </Stack>
          </Box>

          <Box sx={{ width: {xs:"100%", sm:"100%", md:"45%", lg:"45%"} }}>
            <img src={AI} alt="ai" width="100%" />
          </Box>
        </Stack>
      </StyledContainer>
    </div>
  );
};

export default Features;
