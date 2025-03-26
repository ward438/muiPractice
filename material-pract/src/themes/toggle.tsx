import * as React from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { MenuToggleProps } from '../assets/interfaces';
import { menuBoxStyle } from '../assets/styles';
function MenuToggle({toggle, setToggle}: MenuToggleProps) {  

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (    
    <Box sx={{menuBoxStyle}}>
      {!toggle ? (
        <MenuIcon className='menuButtonClosed' onClick={handleClick} sx={{boxShadow: '.12px .5px 0px .25px black', borderRadius: '5px'}}/>)
          : 
        (<MenuOpenIcon className='menuButtonOpen' onClick={handleClick} sx={{boxShadow: '0px 1.75px 4px 0px black', borderRadius: '4px'}}/>

        )}        
    </Box>
    
  );
}
export default MenuToggle;
