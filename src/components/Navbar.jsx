import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// assets
import { MdFacebook } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'
import { FaInstagram } from 'react-icons/fa'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  // scroll event
  const [fixedNav, setFixedNav] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
    return () => window.removeEventListener('scroll', stickNavbar)
  }, [])

  const stickNavbar = () => {
    if (window != undefined) {
      let windowHeight = window.scrollY

      windowHeight > 150 ? setFixedNav('fixed-nav') : setFixedNav('')
    }
  }

  return (
    <>
      <Nav id='section' className={`navbar ${fixedNav}`}>
        <img src={Logo} alt='backroads' />
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Tours</li>
        </ul>
        <div className='logo'>
          <MdFacebook />
          <BsTwitter />
          <FaInstagram />
        </div>
      </Nav>
    </>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  /* position: relative;
  z-index: 999; */

  .navbar {
    position: relative;
    z-index: 999;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    li {
      align-items: center;
      cursor: pointer;
      font-weight: lighter;
      font-size: 1.06rem;
      color: #000;
      transition: all 0.3s ease-in-out;
    }

    li:hover {
      color: hsl(185, 57%, 50%);
    }
  }

  .logo {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    gap: 0.7rem;
    font-weight: 500;
    font-size: 1.3rem;
    cursor: pointer;
    color: hsl(185, 57%, 50%);
  }

  /* fixed nav */
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
  }
`
