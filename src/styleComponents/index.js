import { styled, Box, Typography, Container, TextField } from "@mui/material";

export const StyledBg = styled(Box)({
    background:'-moz-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
    /* safari 5.1+,chrome 10+ */
    background:'-webkit-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
    /* opera 11.10+ */
    background:'-o-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
    /* ie 10+ */
    background:'-ms-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
    /* global 92%+ browsers support */
    background:'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
  });
  export const StyledContainer = styled(Container)({
    background:'-moz-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
    /* safari 5.1+,chrome 10+ */
    background:'-webkit-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
    /* opera 11.10+ */
    background:'-o-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
    /* ie 10+ */
    background:'-ms-radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
    /* global 92%+ browsers support */
    background:'radial-gradient(circle at 3% 25%, rgba(0, 40, 83, 1) 0%, rgba(4, 12, 24, 1) 25%)',
  
  });

  export const StyledText = styled(Typography)({
  
              
  });

  export const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'red',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#FF4820',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e6e6e6',
        borderRadius: '10px'
      },
      '&:hover fieldset': {
        borderColor: '#FF4820',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#040b17',
      },
    },
  });

  