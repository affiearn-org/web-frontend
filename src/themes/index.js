import {useMemo} from 'react';
import { createTheme, ThemeProvider, StyledEngineProvider} from '@mui/material/styles';
import breakpoints from './breakpoint'; 


const TProvider = ({ children }) => {
    const themeOptions =  useMemo(()=>({
        breakpoints
    }), [])
    const theme = createTheme(themeOptions);

    return(
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                 {children}
            </ThemeProvider>
        </StyledEngineProvider>
    )
}

export default TProvider;