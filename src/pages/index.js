import React from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../components/layout"
import "../styles/index.scss"
import config from "../../data/siteConfig"

const ProfileStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  img {
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
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
        <HeaderStyles>Hi, I am Tantely</HeaderStyles>
        <ProfileStyles>
          <img src="https://iili.io/Bp6vVI.jpg" alt="author" />
          <p>
            I'm web developer specializing in modern javascript. I like to make
            things from scratch, contribute to open source, and write about
            latest development in web technology.
          </p>
        </ProfileStyles>
        <p>
          Here are is onja Madagascar team. Onja is a team of young malagasy
          people that are intelligent, underprivileged and craving for education
          to boost Madagascar's development by working on tech. We want
          collaboration with any people any company in the world. Preferably
          working remotely.
        </p>
        <img src="https://iili.io/BZJSNs.jpg" alt="team" />
        <p>
          The picture below is just a random picture that captivated me. It's
          not necessary related to this page but It makes me feel good when I am
          seeing that kind of working space.
        </p>
        <img src="https://iili.io/BZHSCQ.jpg" alt="work-space" />
      </div>
    </Layout>
  )
}

export default Indexpage
