import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

const Products = ({ edges, offerBranded = false }) => (
  <main className="products">
    {edges.map((edge, index) => (
      <div className="products__card">
        <h3>{edge.node.frontmatter.title}</h3>
        <p>{edge.node.frontmatter.description}</p>
        <div className="products__links">
          {!offerBranded && (
            <Link to={edge.node.fields.slug} key={index}>
              View all versions »
            </Link>
          )}
          {offerBranded && (
            <>
              <Link to={edge.node.fields.slug} key={`generic-${index}`}>
                Generic
              </Link>
              <Link
                to={`${edge.node.fields.slug}/?branding=firefox`}
                key={index}
              >
                Branded
              </Link>
            </>
          )}
        </div>
      </div>
    ))}
  </main>
)

export default Products
