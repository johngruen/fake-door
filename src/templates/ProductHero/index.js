import React from 'react'
import { Link } from 'gatsby'
import './index.scss'

const ProductHero = ({ hero, buttonColor }) => {
  const { title, text, image, cta } = hero[0]
  return (
    <div className="product-hero">
      <header>
        <div className="product-hero__content">
          <h1>{title}</h1>
          <p>{text}</p>
          <Link to="/"><button style={{backgroundColor: buttonColor}}>{cta}</button></Link>
        </div>
        <div className="product-hero__image">
          <img src={image.publicURL} alt={text} width="100%" height="auto" />
        </div>
      </header>
    </div>
  )
}

export default ProductHero
