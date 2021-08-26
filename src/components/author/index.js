import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'gatsby'
import Logo from '../../../static/logo/logo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span> */}
      <Link to="/"><img src={Logo}/></Link>
    </div>
    <div className="content">
      <div className="inner">
        <h1>About The Author</h1>
        <p>
          {/* Edwin Alan Salhany was born and raised in Minnesota.
          <br />
          He enlisted in the army in 1964 at the age of twenty-one and spent 
          <br/>
          one of his three years of service in Korea as a US Army engineer.
          <br />
          <Link to="/about-the-author">Read More</Link> */}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <Link className="links"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link className="links"
          to="/about-the-author"
          >
            Author
          </Link>
        </li>
        <li>
          <Link className="links"
          to="/about-the-book"
          >
            Book
          </Link>
        </li>
        <li>
          <Link className="links"
          to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
