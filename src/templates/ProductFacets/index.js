import React from 'react'

import { lightenDarkenColor } from './../../utils/utils'

import './index.scss'

const ProductFacets = ({ facets, bgColor }) =>
  <>
    {facets.map((facet, index) => {
      return (
        <div className="product-facet" key={index}>
          {index % 2 === 0 && <div className="product-facet__bg" style={{ background: `linear-gradient(135deg, ${bgColor},${lightenDarkenColor(bgColor,-20)})`}}/>}
          <section>
            <div className="product-facet__content">
              <h2>{facet.title}</h2>
              <p>{facet.text}</p>
            </div>
            <div className="product-facet__image">
              <img
                alt=""
                src={facet.image.publicURL}
                width="100%"
                height="auto"
              />
            </div>
          </section>
        </div>
      )
    })}
  </>

export default ProductFacets
