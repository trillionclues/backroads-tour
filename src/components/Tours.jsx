import React from 'react'
import styled from 'styled-components'

// assets
import { tours } from '../assets/data/tour'

const Tours = () => {
  return (
    <>
      <Tour id='tour'>
        <div className='tours' id='section'>
          <h1>
            featured <span>tours</span>
          </h1>
          <div className='tour-card'>
            {tours.map((tour) => {
              const { id, img, name, info, pricing, date, duration, city } =
                tour
              console.log(id, img, name, info, pricing, date, duration)
              return (
                <div className='tour' key={id}>
                  <div className='tour-image'>
                    <img src={img} alt='' />
                    <p>{date}</p>
                  </div>
                  <div className='tour-info'>
                    {<h4>{name}</h4>}
                    <p>{info}</p>
                    <div className='tour-itenery'>
                      <p>{city}</p>
                      <p>{duration}</p>
                      <p>{pricing}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Tour>
    </>
  )
}

export default Tours

const Tour = styled.div`
  background-color: #fff;
  padding: 3rem 0 6rem 0;
  overflow: hidden;

  .tours {
    width: 100vw;
    /* max-width: 1170px; */
    margin: 0 auto;

    h1 {
      font-size: 2.5rem;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 3rem;
      color: #000;
      font-weight: bold;
      letter-spacing: 0.2rem;
      text-decoration: underline;
      text-decoration-color: hsl(185, 57%, 40%);
      text-underline-offset: 0.3rem;

      span {
        color: hsl(185, 57%, 40%);
      }
    }

    .tour-card {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-gap: 2rem;
      justify-items: center;
      align-items: center;

      .tour {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        gap: 1.5rem;
        background: hsl(210, 36%, 96%);
        border-radius: 0.5rem;
        box-shadow: 0 5px 15px rgba(0 0 0 / 10%);
        transition: all 0.3s linear;
        margin-bottom: 2rem;

        &:hover {
          transform: translateY(-0.5rem);
        }

        .tour-image {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s linear;
          }

          p {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 0.5rem 0.5rem;
            background-color: hsl(185, 57%, 40%);
            color: #fff;
            font-size: 0.8rem;
            font-weight: 700;
            letter-spacing: 0.1rem;
            text-transform: uppercase;
          }
        }

        .tour-info {
          display: flex;
          flex-direction: column;
          padding: 0 0.5rem 0.8rem 1.5rem;

          h4 {
            font-size: 1.2rem;
            font-weight: 700;
            letter-spacing: 0.1rem;
          }

          p {
            font-size: 0.9rem;
            font-weight: 400;
            letter-spacing: 0.1rem;
            padding: 0.5rem 0;
          }

          .tour-itenery {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: 0.5rem;

            p {
              font-size: 1rem;
              font-weight: 500;
              letter-spacing: 0.1rem;
              color: hsl(185, 57%, 40%);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .tours {
      h1 {
        font-size: 2rem;
      }

      .tour-itenery {
        p {
          font-size: 0.8rem;
          /* color: blue; */
        }
      }
    }
  }
`
