import React from 'react'
import styled from 'styled-components'

// assets
import Image1 from '../assets/images/about.jpeg'
const About = () => {
  return (
    <>
      <Section id='about'>
        <div className='about ' id='section'>
          <h1>
            About <span>US</span>
          </h1>

          <div className='about-preview'>
            <img src={Image1} alt='about image' />
            <div className='about-content'>
              <h2>explore the difference</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quam, eaque ess, neque accusantium libero, dolores minima.
                <br />
                <br />
                Lorem ipsum, consectetur adipisicing elit. Vel officiis cum
                pariatur cumque autem nobis distinctio dolor consequuntur iusto
                animi?
              </p>
              <button type='button'>read more</button>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default About

const Section = styled.div`
  background-color: #fff;
  padding: 3rem 0;
  overflow: hidden;

  .about {
    width: 100vw;
    padding: 2rem 0;

    h1 {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 3.5rem;
      color: #000;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2rem;

      span {
        color: hsl(185, 57%, 50%);
      }
    }
  }

  .about-preview {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 47%;
      height: 100%;
      border: 0.5rem solid hsl(185, 57%, 50%);
      box-sizing: border-box;
      top: -1.5rem;
      left: -0.5rem;
      z-index: 1;
    }

    img {
      width: 47%;
      height: 50%;
      object-fit: cover;
      z-index: 5;
    }

    .about-content {
      width: 50%;
      padding: 0 0 0 2rem;

      h2 {
        text-transform: capitalize;
        font-size: 1.7rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #000;
        letter-spacing: 3px;
      }

      p {
        font-size: 1rem;
        font-weight: lighter;
        color: #000;
        margin-bottom: 1.5rem;
      }

      button {
        background-color: hsl(185, 57%, 50%);
        color: #fff;
        padding: 0.5rem 1rem;
        border: none;
        font-size: 1rem;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: hsl(185, 57%, 40%);
          font-weight: lighter;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .about {
      padding: 0;

      h1 {
        font-size: 2rem;
      }

      .about-preview {
        flex-direction: column;
        align-items: center;

        &::before {
          display: none;
        }

        img {
          width: 100%;
          height: 35vh;
        }

        .about-content {
          width: 100%;
          padding: 0;

          h2 {
            font-size: 1.5rem;
            margin-top: 2rem;
          }

          p {
            font-size: 0.9rem;
          }

          button {
            /* padding: 0.3rem 0.8rem;
            font-size: 0.9rem; */
          }
        }
      }
    }
  }
`
