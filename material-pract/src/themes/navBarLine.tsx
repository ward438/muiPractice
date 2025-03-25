import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Create MUI Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#007FFF',
      dark: '#0066CC',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default function NavLine() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
            width: '100%',
            backgroundColor: 'black',
            height: '10px'
        }}
      >
       
      </Box>
    </ThemeProvider>
  );
}
