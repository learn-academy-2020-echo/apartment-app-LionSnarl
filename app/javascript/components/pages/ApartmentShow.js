import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'

class ApartmentShow extends Component {
  render() {
    const { apartment } = this.props
    return (
      <>
        <h3>Showing Apartment!</h3>
            <h5>{ apartment.street }</h5>
            <h5>{ apartment.city }</h5>
            <h5>{ apartment.state }</h5>
            <h5>{ apartment.manager }</h5>
            <h5>{ apartment.email }</h5>
            <h5>Bedrooms: { apartment.bedrooms }</h5>
            <h5>Bathrooms: { apartment.bathrooms }</h5>
            <h5>Pets: { apartment.pets }</h5>
            <br />
            <NavLink to="/aptindex">
              <Button color="secondary">
                Back to All Apartments
              </Button>
            </NavLink>
      </>
    )
  }
}
export default ApartmentShow