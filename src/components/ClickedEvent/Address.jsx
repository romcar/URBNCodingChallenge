import React from 'react'
import StyledAddress from '../../assets/StyledComponents/Address/Address';
export default ({ venue_name, venue_address, city_name, region_abbr, postal_code, venue_url }) => {
  return (
    <StyledAddress className="event-modal-address">
      <a href={venue_url} className="venue-name">{venue_name}</a>
      <div className="venue-address">
        {`${venue_address} ${city_name}, ${region_abbr}. ${postal_code}`}
      </div>
    </StyledAddress>
  )
}
