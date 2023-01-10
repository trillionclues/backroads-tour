import React from 'react'
import styled from 'styled-components'

// assets
import { TbBrandMeta } from 'react-icons/tb'
import { BsTwitter } from 'react-icons/bs'
import { FaSquarespace } from 'react-icons/fa'

const Footer = () => {
  return (
    <>
      <Section>
        <div className='footer ' id='section'>
          <ul>
            <a href='#'>
              <li>Home</li>
            </a>

            <a href='#'>
              <li>About</li>
            </a>

            <a href='#'>
              <li>Services</li>
            </a>

            <a href='#'>
              <li>Tours</li>
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

          <p>
            Backroads Tour &copy; <span>2023</span> All Rights Reserved
          </p>
        </div>
      </Section>
    </>
  )
}

export default Footer

const Section = styled.div`
  background-color: hsl(209, 61%, 16%);
  padding: 3rem 0 6rem 0;
  overflow: hidden;

  .footer {
    width: 100vw;
    margin: 0 auto;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
      padding: 0;
      margin: 0;
      color: #fff;
      font-size: 1rem;
      font-weight: 200;
      gap: 1rem;

      a {
        text-decoration: none;
        color: #fff;
        transition: all 0.3s ease-in-out;
      }

      li {
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: hsl(185, 57%, 50%);
        }
      }
    }

    .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin: 1.5rem 0;
      font-weight: 500;
      font-size: 1.8rem;
      color: #fff;

      &::before {
        content: '';
        display: block;
        width: 1px;
        height: 1.5rem;
        background-color: hsl(185, 57%, 50%);
      }

      a {
        text-decoration: none;
        color: #fff;
        transition: all 0.3s ease-in-out;

        &:hover {
          color: hsl(185, 57%, 50%);
          cursor: pointer;
        }
      }

      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 1.5rem;
        background-color: hsl(185, 57%, 50%);
      }
    }

    p {
      text-align: center;
      color: #fff;
      font-size: 1.2rem;
      font-weight: 800;
    }
  }
`
