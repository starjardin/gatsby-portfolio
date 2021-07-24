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
            I'm a web developer specializing in HTML5, CSS3, modern javaScript,
            React. I like to make things from scratch.
          </p>
        </ProfileStyles>
        <p>
          I'm part of Onja team in Madagascar. Onja is a team of young malagasy
          people that are intelligent, underprivileged and craving for education
          to boost Madagascar's development by working on tech. We want
          collaboration with people, any company in the world. Preferably
          working remotely.
        </p>
      </div>
    </Layout>
  )
}

export default Indexpage
