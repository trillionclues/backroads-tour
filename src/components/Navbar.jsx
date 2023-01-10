import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// assets
import { TbBrandMeta } from 'react-icons/tb'
import { BsTwitter } from 'react-icons/bs'
import { FaSquarespace } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaTimes } from 'react-icons/fa'
import Logo from '../assets/images/logo.svg'

const Navbar = () => {
  // scroll event
  const [fixedNav, setFixedNav] = useState('')
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleClick = () => setToggleMenu(!toggleMenu)
  const closeMobileMenu = () => setToggleMenu(false)

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
        <img className='bg-logo' src={Logo} alt='backroads' />
        <nav className='menu__icon'>
          <img src={Logo} alt='backroads' />
          <span className='toggle'>
            {toggleMenu ? (
              <FaTimes onClick={() => setToggleMenu(false)} />
            ) : (
              <RxHamburgerMenu onClick={() => setToggleMenu(true)} />
            )}
          </span>
        </nav>

        <ul className='nav_menu'>
          <a href='#'>
            <li className='nav__links'>Home</li>
          </a>

          <a href='#about'>
            <li className='nav__links'>About</li>
          </a>

          <a href='#services'>
            <li className='nav__links'>Services</li>
          </a>

          <a href='#tour'>
            <li className='nav__links'>Tours</li>
          </a>
        </ul>
        <div className='logo'>
          <a href='#'>
            <TbBrandMeta />
          </a>

          <a href='#'>
            <BsTwitter />
          </a>

          <a href='#'>
            <FaSquarespace />
          </a>
        </div>
      </Nav>

      <ResponsiveNav state={toggleMenu}>
        <ul className='nav_menu'>
          <a href='#'>
            <li className='nav__links' onClick={() => setToggleMenu(false)}>
              Home
            </li>
          </a>

          <a href='#about'>
            <li className='nav__links' onClick={() => setToggleMenu(false)}>
              About
            </li>
          </a>

          <a href='#services'>
            <li className='nav__links' onClick={() => setToggleMenu(false)}>
              Services
            </li>
          </a>

          <a href='#tour'>
            <li className='nav__links' onClick={() => setToggleMenu(false)}>
              Tours
            </li>
          </a>
        </ul>
      </ResponsiveNav>
    </>
  )
}

export default Navbar

const ResponsiveNav = styled.div`
  display: flex;
  background-color: hsl(209, 61%, 16%);
  z-index: 99;
  width: 100%;
  position: fixed;
  align-items: center;
  transition: all 0.3s ease-in-out;
  height: 50vh;
  top: ${({ state }) => (state ? '65px' : '-700px')};

  .nav_menu {
    list-style-type: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    a {
      text-align: center;
      text-decoration: none;
      color: #fff;
      transition: all 0.3s ease-in-out;

      &:first-of-type {
        border-top: 1px solid #fff;

        color: hsl(209, 34%, 30%);
      }

      &:hover {
        color: hsl(209, 34%, 30%);
      }
    }

    .nav__links {
      width: 100%;
      padding: 1rem 0;
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      cursor: pointer;
    }
  }
`

// Desktop View
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  /* position: relative;
  z-index: 999; */

  .menu__icon {
    display: none;
  }

  .navbar {
    position: relative;
    z-index: 999;
  }

  img {
    width: 10rem;
    cursor: pointer;
  }

  .nav_menu {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-right: 2rem;
    transition: all 0.3s ease-in-out;
    position: relative;

    a {
      text-align: center;
      text-decoration: none;
      color: grey;
      transition: all 0.3s ease-in-out;

      &:hover {
        text-decoration: underline;
        text-decoration-color: hsl(209, 61%, 16%);
        text-underline-offset: 0.3rem;
      }
    }

    .nav__links {
      align-items: center;
      cursor: pointer;
      font-weight: lighter;
      font-size: 1.06rem;
      color: #000;
      transition: all 0.3s ease-in-out;
    }

    .nav__links:hover {
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

    a {
      text-decoration: none;
      color: hsl(185, 57%, 50%);
      transition: all 0.3s ease-in-out;

      &:hover {
        color: hsl(209, 61%, 16%);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .nav_menu {
      display: none;
    }

    .bg-logo,
    .nav_menu,
    .logo {
      display: none;
    }

    .menu__icon {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      /* gap: 6rem; */

      img {
        width: 12rem;
        height: 100%;
        object-fit: contain;
      }

      .toggle {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font-size: 2.2rem;
        color: hsl(209, 61%, 16%);
      }
    }
  }

  /* fixed nav */
  .fixed-nav {
    position: fixed;
    top: 0;
    left: 0;
  }
`
