import { graphql } from 'gatsby'
import React from 'react'

import Layout from './../../components/Layout'
import ProductFacets from './../ProductFacets'
import ProductFooter from './../ProductFooter'
import ProductHeader from './../ProductHeader'
import ProductHero from './../ProductHero'

import { isValidHex } from './../../utils/utils'

import './index.scss'
import firefoxIcon from './../../images/firefox-logo.png'

const Product = ({ data }) => {
  const urlParams = new URLSearchParams(window.location.search)
  const isFirefox =
    urlParams.has('branding') && urlParams.get('branding') === 'firefox'
  let classList = 'product'
  classList = isFirefox ? `${classList} product--is-firefox` : classList

  let bgColor =
    urlParams.has('bg') && isValidHex(urlParams.get('bg'))
      ? urlParams.get('bg')
      : 'd1e6f5'

  let buttonColor =
    urlParams.has('button') && isValidHex(urlParams.get('button'))
      ? urlParams.get('button')
      : '0a84ff'

  bgColor = `#${bgColor}`
  buttonColor = `#${buttonColor}`
  let { name, icon, hero, facets } = data.markdownRemark.frontmatter.product[0]

  const productName = isFirefox ? `Firefox ${name}` : name
  const productIconPath = isFirefox ? firefoxIcon : icon.publicURL
  return (
    <Layout
      rootClass={classList}
      title={productName}
      description={hero[0].title}
      favicon={productIconPath}
    >
      <ProductHeader icon={productIconPath} name={productName} />
      <ProductHero {...{ hero, buttonColor }} />
      <ProductFacets {...{ facets, bgColor }} />
      <ProductFooter />
    </Layout>
  )
}

export default Product

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        product {
          name
          icon {
            publicURL
          }
          hero {
            title
            text
            cta
            image {
              publicURL
            }
          }
          facets {
            title
            text
            image {
              publicURL
            }
          }
        }
      }
    }
  }
`
