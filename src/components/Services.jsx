import React from 'react'
import styled from 'styled-components'

// assets
import { FaWallet } from 'react-icons/fa'
import { FaTree } from 'react-icons/fa'
import { FaSocks } from 'react-icons/fa'

const Services = () => {
  return (
    <Section id='services'>
      <div className='services ' id='section'>
        <h1>
          our <span>services</span>
        </h1>

        <div className='display-services'>
          <div className='service'>
            <div className='icon'>
              <FaWallet size='2rem' />
            </div>

            <div className='content'>
              <p>saving money</p>
              <p>Lorem ipsum dolor sit amet consectetur elit. Fuga quma.</p>
            </div>
          </div>
          <div className='service'>
            <div className='icon'>
              <FaTree size='2rem' />
            </div>
            <div className='content'>
              <p>endless hiking</p>
              <p>Lorem ipsum dolor sit amet dipisicing elit. Fuga quam, eaq.</p>
            </div>
          </div>
          <div className='service'>
            <div className='icon'>
              <FaSocks size='2rem' />
            </div>

            <div className='content'>
              <p>samazing comfort</p>
              <p>
                Lorem ipsum doloelit. Fuga quam, eaque ess, neque olores minima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services

const Section = styled.div`
  background-color: hsl(210, 36%, 96%);
  padding: 3rem 0 6rem 0;
  overflow: hidden;

  .services {
    width: 100vw;
    padding: 3.5rem 0;

    h1 {
      font-size: 2.5rem;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 2.3rem;
      color: #000;
      font-weight: 700;
      letter-spacing: 0.2rem;

      span {
        color: hsl(185, 57%, 40%);
      }
    }

    .display-services {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
      justify-items: center;
      align-items: center;

      .service {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 1.5rem;

        .icon {
          color: #000;
          background-color: hsl(185, 57%, 40%);
          padding: 0.8rem 0.7rem;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .services {
      h1 {
        font-size: 2rem;
        margin-bottom: 3.5rem;
      }

      .display-services {
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1.5rem;

        .service {
          flex-direction: column;

          .content {
            text-align: center;

            p:first-of-type {
              font-size: 1.2rem;
              margin-bottom: 0.5rem;
            }

            p:last-of-type {
              font-weight: lighter;
            }
          }
        }
      }
    }
  }
`
