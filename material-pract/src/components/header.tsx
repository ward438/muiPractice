import * as React from 'react';
import HeaderTheme from '../themes/navTheme';
import DropDownNavMenu from '../themes/dropDownNavMenu';

// 
export default function Header() {
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <HeaderTheme toggle={toggle} setToggle={setToggle}/>
      <DropDownNavMenu toggle={toggle}/>    
    </>

  );
}