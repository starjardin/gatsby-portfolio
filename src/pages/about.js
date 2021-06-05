import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import config from '../../data/siteConfig'
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
					Hi ! I am <strong>Tantely Andry</strong> a web developer form on Madagascar, interested in working
					with any teams. Eager to learn and help to turn your idea into reality. I like to spend my leisure
					time working on web projects.
				</p>
				<br />
				<h3 id='around-the-web'>Around the web</h3>
				<br />
				<StaticQuery
					query={query}
					render={({ site: { siteMetadata: { githubUsername: github } } }) => {
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
