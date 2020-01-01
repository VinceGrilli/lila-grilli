import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const GalleryPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  gallery
}) => (
  <main className="GalleryPage">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Gallery images={gallery} />
      </div>
    </section>
  </main>
)

const GalleryPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <GalleryPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)
export default GalleryPage

export const pageQuery = graphql`
  query GalleryPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
