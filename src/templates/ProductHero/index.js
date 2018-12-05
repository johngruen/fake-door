import React from 'react'
import { Link } from 'gatsby'
import './index.scss'

const ProductHero = ({ hero, buttonColor }) => {
  const { title, text, image, cta } = hero[0]
  return (
    <section className="mzp-c-hero mzp-has-image">
      <div className="mzp-l-content">
        <div className="mzp-c-hero-body">
          <h1>{title}</h1>
          <div class="mzp-c-hero-desc">
            <p>{text}</p>
          </div>
          <p class="mzp-c-hero-cta">
            <a class="mzp-c-button" href="#">
              {cta}
            </a>
          </p>
        </div>
      </div>
      <div className="mzp-c-hero-image">
        <img src={image.publicURL} alt={text} width="100%" height="auto" />
      </div>
    </section>
  )
}

export default ProductHero
