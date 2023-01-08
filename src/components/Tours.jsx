import React from 'react'
import styled from 'styled-components'

// assets
import { tours } from '../assets/data/tour'

const Tours = () => {
  return (
    <>
      <Tour>
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
`
