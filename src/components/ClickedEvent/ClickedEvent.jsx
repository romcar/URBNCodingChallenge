import moment from 'moment';
import React, { Component } from 'react'
import StyledClickedEvent from '../../assets/StyledComponents/ClickedEvent/ClickedEvent';
import utils from '../../assets/utils';

// styled components
import Container from '../../assets/StyledComponents/Container/Container';
import StyledModalTitle from '../../assets/StyledComponents/ModalTitle/ModalTitle';
import StyledModalMap from '../../assets/StyledComponents/ModalMap/ModalMap';
import StyledEventLocation from '../../assets/StyledComponents/EventInfo/EventLocation';

// components
import Address from './Address';

export default (props) => {
  setTimeout(() => { utils.initMap(google, props.latitude, props.longitude) }, 0);

  console.log(props)
  return (
    <StyledClickedEvent>
      <StyledModalTitle>
        {props.title}
      </StyledModalTitle>
      <Container rows={[2, 3]} cols={[1, 9]}>
        <StyledEventLocation>{`${props.city_name}, ${props.region_abbr}. ${moment(props.start_time).format('llll')}`}</StyledEventLocation>
      </Container>
      <StyledModalMap id="event-modal-map" >
        Map did not display
      </StyledModalMap>
      <Address {...props}></Address>
    </StyledClickedEvent>
  );
};
