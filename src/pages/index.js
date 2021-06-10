import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/layout'
import '../styles/index.scss'
import config from '../../data/siteConfig'

const ProfileStyles = styled.div`
	width: 20vw;
	height: 20vw;
	border-radius: 50%;
	margin: auto;
	display: block;

	img {
		width: 100%;
		height: auto;
	}
`

const Indexpage = () => {
	return (
		<Layout>
			<Helmet title={config.siteTitle} />
			<div>
				<h1>Hi, I am Tantely</h1>
				<p>
					I'm web developer specializing in modern javascript. I like to<br /> make things from scratch,
					contribute to open source, and write <br />about latest development in web technology.
				</p>
				<ProfileStyles>
					<img src='https://iili.io/BZHm6N.jpg' alt='me' />
				</ProfileStyles>
				<img src='https://iili.io/BZJSNs.jpg' alt='team' />
				<img src='https://iili.io/BZHSCQ.jpg' alt='work-space' />
			</div>
		</Layout>
	)
}

export default Indexpage
