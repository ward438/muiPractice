import * as React from 'react';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MenuToggle from './toggle';

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

export default function HeaderTheme() {

  const [toggle, setToggle] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{  
        boxShadow: '0px 2.5px 4px 0px grey',          
        position: 'absolute',
        top: 10,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: 75,         
        bgcolor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white', // Make text visible
        fontWeight: 'bold',
        fontFamily: 'Roboto, Arial, sans-serif', // Ensure local component uses it
        '&:hover': {
          bgcolor: 'primary.dark',
        }
      }}
      >
         <MenuToggle toggle={toggle} setToggle={setToggle}/>
        
      </Box>
    </ThemeProvider>
  );
}
