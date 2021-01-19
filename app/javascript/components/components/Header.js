import React, { Component } from 'react'

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
        <h1>FindApartment App!</h1>
        {/* Devise Routes Below, Conditional Rendering */}
        {
          !logged_in &&
          <a href={ sign_in_route }>Sign In</a>
        }
        {
          logged_in &&
          <a href= { sign_out_route }>Sign Out</a>
        }
      </>
    )
  }
}
export default Header