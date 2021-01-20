import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
      // destrctures state below for login properties
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
    } = this.props
    return (
      <>
        {/* Devise Routes Below, Conditional Rendering */}
        <ul>
            {
              !logged_in &&
              <li><a href={ sign_in_route }>Sign In</a></li>
            }
            {
              logged_in &&
              <li><a href={ sign_out_route }>Sign Out</a></li>
            }
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aptindex">Apartment Listings</NavLink></li>
            <li><NavLink to="/myapt">My Apartments</NavLink></li>
            <li><NavLink to="/myaptnew">Add Apartment</NavLink></li>
          </ul>
      </>
    )
  }
}
export default Header