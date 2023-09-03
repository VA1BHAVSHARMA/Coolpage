import React from 'react'
import './Header.css';
import Logo from '../images/logo_V.png';
import { Link } from 'react-scroll';

function Header() {

  return (
    <div className='header'>
      <div className="logo">
        <img className='logo_img' src={Logo} alt='My Name.' />
      </div>
      {/* <h3 className='logo'>VAIBHAV</h3> */}
      <div className='points'>
        <Link to='home' spy={true} smooth={true} offset={0} duration={500} className='h_a'>Home</Link>
        <Link to='about' spy={true} smooth={true} offset={0} duration={500} className='h_a'>About</Link>
        <Link to='program' spy={true} smooth={true} offset={0} duration={500} className='h_a'>Programs</Link>
        <Link to='contact' spy={true} smooth={true} offset={0} duration={500} className='h_a'>Contact</Link>
      </div>
    </div>
  )
}

export default Header
