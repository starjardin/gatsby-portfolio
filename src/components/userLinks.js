import React from "react"
import footerStyles from "./modules/footer.module.scss"
const UserLink = props => {
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  const [github, twitter, linkedIn] = props.link
  return (
    <div>
      <h2>Stay in touch</h2>
      <a
        href={`https://github.com/${github.username}`}
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.link}
      >
        <span>{capitalize(github.label)}</span>
      </a>
      <a
        href={`https://github.com/${github.username}`}
        className={footerStyles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{capitalize(twitter.label)}</span>
      </a>
      <a
        href={`https://github.com/${github.username}`}
        className={footerStyles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{capitalize(linkedIn.label)}</span>
      </a>
    </div>
  )
}
export default UserLink
