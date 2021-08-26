import PropTypes from 'prop-types'
import React from 'react'
import {Link} from 'gatsby'
import Logo from '../../static/logo/topLogo.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      {/* <span className="icon fa-diamond"></span> */}
      <Link to="/"><img src={Logo}/></Link>
    </div>
    <div className="content">
      <div className="inner">
        <h1>The Gospel <br/>"Lite"</h1>
        <h2>FOUR WITNESSES-ONE LIFE</h2>
        <br/>
        <p><i>
        The Complete consolidated Gospel <br/>
          <br />
          All the Detail - None of the Duplication<br/>
          <br/>
          Adapted from the Authorized King James Version
          <br /> 
          </i></p>
          <Link to="/about-the-book">Read More</Link>
       
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
