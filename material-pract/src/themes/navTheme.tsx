import * as React from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import MenuToggle from './toggle';
import { navTheme } from './themeColor';
import { MenuToggleProps } from '../assets/interfaces';


export default function HeaderTheme({toggle, setToggle}: MenuToggleProps) {
  return (
    <ThemeProvider theme={navTheme}>
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
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Roboto'
      }}>
        <MenuToggle toggle={toggle} setToggle={setToggle}/>    
      </Box>
    </ThemeProvider>
  );
}
