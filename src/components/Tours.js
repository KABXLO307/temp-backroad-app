import React from 'react'
import { Title } from './Title'
import { tours } from "../data.js"

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="Featured" subTitle="Services"></Title>

      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, image, date, title, info, price, duration, location } = tour;
          return (

            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <h4>{title}</h4>
                <p>
                  {info}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {location}
                  </p>
                  <p>{duration}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          )
        })
        }
      </div>
    </section >

  )
}

export default Tours