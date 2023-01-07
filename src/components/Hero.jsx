import React from 'react'
import styled from 'styled-components'

// assets
import HeroImg from '../assets/images/main.jpeg'

const Hero = () => {
  return (
    <>
      <Prev>
        <img src={HeroImg} alt='' />

        <div className='hero-content'>
          <h1>continue exploring</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde,
            deleniti!
          </p>
          <button type='button'>explore tours</button>
        </div>
      </Prev>
    </>
  )
}

export default Hero

const Prev = styled.div`
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      rgb(44, 174, 186, 0.7),
      rgba(0, 0, 0, 0.7)
    );
    opacity: 0.8;
    background-repeat: no-repeat;
  }

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .hero-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    z-index: 10;

    h1 {
      font-size: 4rem;
      text-transform: uppercase;
      margin-bottom: 1rem;
      font-weight: 900;
    }

    p {
      font-size: 1rem;
      margin-bottom: 1rem;
      letter-spacing: 5px;
    }

    button {
      padding: 1rem 1.5rem;
      background-color: #fff;
      color: hsl(185, 57%, 50%);
      border: none;
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 2px;
      transition: all 0.3s ease-in-out;
      text-transform: uppercase;
      margin-top: 0.5rem;
    }

    button:hover {
      background-color: transparent;
      border: 1px solid #fff;
      color: #fff;
    }
  }
`
