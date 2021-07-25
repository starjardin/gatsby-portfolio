import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../components/layout"
import "../styles/index.scss"
import config from "../../data/siteConfig"

const ProfileStyles = styled.div`
  display: block;
`

const HeaderStyles = styled.h1`
  @media (max-width: 500px) {
    text-align: center;
  }
`

const Indexpage = () => {
  return (
    <Layout>
      <Helmet title={config.siteTitle} />
      <div>
        <HeaderStyles>Hi, I'm Tantely</HeaderStyles>
        <ProfileStyles>
          <p>
            I'm a web developer specializing in HTML5, CSS3, modern JavaScript,
            React. I like creating things from scratch.
          </p>
        </ProfileStyles>
        <p>
          I'm part of the social enterprise called Onja, in Madagascar. Onja is
          a team of young intelligent Malagasy people who are eager to boost
          Madagascar's development by working in tech through upskilling and
          capacity building. We want to collaborate with people and companies
          from anywhere in the world, preferably working remotely.
        </p>
      </div>
    </Layout>
  )
}

export default Indexpage
