import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import media from '../assets/salty_egg.jpg'


class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div class="media" style={{marginBottom: 25}} key={node.fields.slug}>
              <div class="media-body">
                <h2 class="mt-0">
                <Link className="btn btn-link p-0"  style={{
                  boxShadow: 'none',
                  fontSize: '22px',
                  marginTop: '-20px',
                  color: '#222',
                  transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out',
                  fontWeight: 'bold', }} to={node.fields.slug}>
                  {title}
                </Link>
                </h2>
                <small style={{color: '#777', paddingBottom: 15}}>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
              {/* <img class="mr-3 img-fluid" src={media} style={{width: '15%'}} alt="Generic placeholder image"/> */}
            </div>
          )
        })}
        {/* <Bio /> */}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
