import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "../components/modules/post.scss"
import Helmet from "react-helmet"
import Img from "gatsby-image"
import "../styles/page.scss"
export const query = graphql`
  query($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...FrontmatterFragmentBlog
      html
      fields {
        slug
      }
    }
  }
`
const Blog = props => {
  const { frontmatter, html } = props.data.markdownRemark
  const { title, date, tags, thumbnail } = frontmatter

  return (
    <Layout>
      <Helmet title={title} />
      <div className="head_container">
        {thumbnail ? <Img fixed={thumbnail.childImageSharp.fixed} /> : null}
        <div className={`head_wrapper`}>
          <h2 className={`head_title`}>{title}</h2>
          <p>
            <span className={`date`}>{date}</span>
            <span>
              This {tags.join("").includes("Native") ? "app" : "site"} is built
              with
              {tags}
            </span>
          </p>
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}
export default Blog
