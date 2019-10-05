import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navigation from "./partials/navigation"

const Header = ({ siteTitle }) => (
  <header className="site__header">
    <div className="site__header-logo">
      <Link to="/">Joel Krause.</Link>
    </div>
    <Navigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header