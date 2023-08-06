import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpider } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [isActiveButton, setIsActiveButton] = useState(false)
  const [isFirstTimeAnimation, setIsFirstTimeAnimation] = useState(true)
  const [isLockedScreen, setIsLockedScreen] = useState(true)
  const useMenu = () => { 
    if(window.innerWidth <= 1105){
      setIsAnimated(!isAnimated);
      setIsFirstTimeAnimation(false)
      setIsActiveButton(!isActiveButton)
      setIsLockedScreen(true)
      if(isLockedScreen === true){
        document.body.classList.add('locked')
      }
      else{
        document.body.classList.remove('locked')
      }
    }

   }
  const useBurgerMenu = () => {
    setIsAnimated(!isAnimated);
    setIsFirstTimeAnimation(false)
    setIsActiveButton(!isActiveButton)
    setIsLockedScreen(!isLockedScreen)
    if(isLockedScreen === true){
      document.body.classList.add('locked')
    }
    else{
      document.body.classList.remove('locked')
    }
  };
  return (
    <nav className='navbar'>
        <h1 className="navbar_logo">CodeWeb Solution <FontAwesomeIcon icon={faSpider} style={{color: '#00839f'}}/></h1>
        <button className="navbar_burger-button" onClick={useBurgerMenu}>
          <div className="navbar_burger-button_box">
            <div className={`navbar_burger-button_box-line ${isAnimated ? 'navbar_burger-button_box-line-firstactive' : ''}`}/>
            <div className={`navbar_burger-button_box-line ${isAnimated ? 'navbar_burger-button_box-line-secondactive' : ''}`}/>
            <div className={`navbar_burger-button_box-line ${isAnimated ? 'navbar_burger-button_box-line-thirdactive' : ''}`}/>
          </div>
        </button>
        <menu className={`navbar_menu animate__animated ${isAnimated ? 'navbar_menu--active' : ''}`}>
            <a href="#home" className='navbar_menu-redirect' onClick={useMenu}>home</a>
            <a href="#aboutme" className='navbar_menu-redirect' onClick={useMenu}>o mnie</a>
            <a href="#skills" className='navbar_menu-redirect' onClick={useMenu}>umiejętności</a>
            <a href="#projects" className='navbar_menu-redirect' onClick={useMenu}>projekty</a>
            <a href="#contact" className='navbar_menu-redirect' onClick={useMenu}>kontakt</a>
        </menu>
    </nav>
  )
}

export default Navbar