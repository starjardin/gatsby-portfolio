import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import contactStyle from "../components/modules/contact.module.scss"
import Helmet from "react-helmet"
import config from "../../data/siteConfig"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          Email
          githubUsername
        }
      }
    }
  `)
  const { Email, githubUsername: starjardin } = data.site.siteMetadata
  return (
    <Layout>
      <Helmet title={`Contact - ${config.userName}`} />
      <div>
        <h2 className={contactStyle.title}>Stay in touch</h2>
        <p>
          I build websites and mobile apps related to HTML5, CSS3, JavaScript,
          React, React Native, typescript and Various useful Api. For state
          management I use React context api and Redux. Workflow I use gitBash
          and github. I am craving to learn more about technology that can
          improve my productivity and efficiency such as testing, typescript,
          other ways of managing workflow.
        </p>
        <p className={contactStyle.subtitle}>
          You can contact me via email or find me around the web.
        </p>
        <ul className={contactStyle.list}>
          <li>
            Email:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={contactStyle.link}
              href={`mailto:${data.site.siteMetadata.Email}`}
            >
              {Email}
            </a>
          </li>
          <li>
            Github:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={contactStyle.link}
              href={`https://github.com/${starjardin}`}
            >
              {starjardin}
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}
export default Contact
