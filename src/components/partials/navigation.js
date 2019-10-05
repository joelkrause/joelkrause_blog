import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Nav = () => (
    <nav className="site__header-nav">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
    </nav>
)

export default Nav