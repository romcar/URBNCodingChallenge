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
import ModalImage from '../ModalImage/ModalImage';
import Description from './Description';

export default (props) => {
  setTimeout(() => { utils.initMap(google, props.latitude, props.longitude) }, 0);

  const desc = props.description ? utils.convertSpecialCharsToString(props.description) : null;
  return (
    <StyledClickedEvent>
      <StyledModalTitle>
        {props.title}
      </StyledModalTitle>
      <Container rows={[2, 3]} cols={[1, 9]}>
        <StyledEventLocation>{`${props.city_name}, ${props.region_abbr}. ${moment(props.start_time).format('llll')}`}</StyledEventLocation>
      </Container>
      <ModalImage image={props.image}></ModalImage>
      <Description desc={desc}></Description>
      <StyledModalMap id="event-modal-map" >
        Map did not display
      </StyledModalMap>
      <Address {...props}></Address>
    </StyledClickedEvent>
  );
};
