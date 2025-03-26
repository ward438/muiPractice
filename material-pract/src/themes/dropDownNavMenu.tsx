import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuToggleProps } from '../assets/interfaces';

export default function DropDownNavMenu({ toggle }: MenuToggleProps) {
  return (
    <>
      {toggle ? (
        <Box
          className="drop-down-nav"   
          sx={{
            position: 'relative',
            marginTop: '5.45em',
            height: '5em',
            backgroundColor: '#1c73b3ed',
            width: '102%',
            marginLeft: '-.47em',
          }}
        >
            {!toggle ? 
            
                (<Box/>)             
                :            
                (
                  <Box
                    component="form"                                     
                    sx={{ 
                      '& > :not(style)': { m: 1, width: '25ch' },
                      paddingTop: '.2em',
                      boxShadow: '0px 1.75px 4px 0px black'
                    }}
                    noValidate
                    autoComplete="off"
                    >
                    <TextField 
                        id="user-login"
                        label="User Name" 
                        variant="outlined"
                        sx={{backgroundColor: 'white', borderRadius: '5px'}}
                      /> 
                    <TextField 
                        id="user-login"
                        label="Password" 
                        variant="outlined"
                        sx={{backgroundColor: 'white',borderRadius: '5px'}}
                      /> 
                    <Box className="container">
                      <Box className="line"/>
                      <Box className="line"/>
                      <Box className="line"/>
                      <Box className="line"/>
                      <Box className="line"/>
                      <Box className="line"/>
                      <Box className="line"/>
                      <Box className="line"/>
                      <Box className="line"/>
                      <Box className="line"/>
                    </Box>         
                  </Box>
                )}           
        </Box>
      ) : null}
    </>
  );
}
