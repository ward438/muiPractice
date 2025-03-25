import * as React from 'react';
import Box from '@mui/material/Box';
import { Check as CheckIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


interface MenuToggleProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

function MenuToggle({toggle, setToggle}: MenuToggleProps) {   

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    // todo: creat Top submenu that drops down from the bottom of the header. Onlick ()=> , toggle
    
      <Box sx={{
        width:'2em',
        height: '2em',
        backgroundColor: 'primary.main',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        paddingLeft: '.15em',
        paddingTop: '.5em'
      }}    
      >
        {!toggle ? (<MenuIcon onClick={handleClick} sx={{boxShadow: '.12px .5px 0px .25px black'}}/>) : (<MenuOpenIcon onClick={handleClick} sx={{boxShadow: '0px 1.75px 4px 0px black'}}/>)}        
      </Box>
    
  );
}
export default MenuToggle;
