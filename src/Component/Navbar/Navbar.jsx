import React, { useEffect, useState } from 'react'
import { Link, animateScroll } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu-icon.png'
function Navbar() {

  const [mobileMenu,setMobileMenu]=useState(false)

  const hideBar=()=>{
    mobileMenu?setMobileMenu(false):setMobileMenu(true)
  }


  const [sticky,setStiky]=useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setStiky(true) : setStiky(false)
    })
  },[])
  return (
    <nav className={`container ${sticky? 'dark-nav':''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu?"":"hide-mobile-menu"}>
            <li><Link to='hero' smooth={true} offset={0} durstion={500}> Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} durstion={500}> Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} durstion={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} durstion={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} durstion={500}>Testimonisl</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} durstion={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu} alt="" className='menu' onClick={hideBar}/>
      
    </nav>
  )
}

export default Navbar
