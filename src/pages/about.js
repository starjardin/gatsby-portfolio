import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import config from "../../data/siteConfig"
const Aboutpage = () => {
  const query = graphql`
    query {
      site {
        siteMetadata {
          githubUsername
        }
      }
    }
  `
  return (
    <Layout>
      <Helmet title={`Me - ${config.userName}`} />
      <div>
        <h2>About me</h2>
        <p>
          Hi! I'm Tantely <strong>Andrianarivola</strong>, a web developer from
          Madagascar, interested in working with any teams that will value my
          contribution. I like spending my spare time working on web projects
          and having fun trying new things.
        </p>
        <br />
        <h3 id="around-the-web">Around the web</h3>
        <br />
        <StaticQuery
          query={query}
          render={({
            site: {
              siteMetadata: { githubUsername: github },
            },
          }) => {
            return (
              <ul>
                <li>
                  Github: <a href={`https://github.com/${github}`}>{github}</a>
                </li>
              </ul>
            )
          }}
        />
      </div>
    </Layout>
  )
}
export default Aboutpage
