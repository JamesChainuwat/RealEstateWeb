import React, { useState } from 'react';
import './Header.css';
import { IoMenu } from "react-icons/io5";
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
      {
        return {right: !menuOpened && "-100%"}
      }
  }
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>

            <img src="./logo4.png" alt="logo" width={100}/>
            <OutsideClickHandler onOutsideClick={()=>{
              setMenuOpened(false)
            }}>
            <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
                <a href="">Buy</a>
                <a href="">Sell</a>
                <a href="">Rent</a>
                <a href="">Contact Us</a>
                <button className='shadow_btn'>Login</button>
            </div>
              </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>setMenuOpened((prev) => !prev)}>
          <IoMenu size={30}/>
        </div>
        </div>

    </section>
  )
}

export default Header