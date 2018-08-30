import moment from 'moment';
import React from 'react'
import showdown from 'showdown';
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

const converter = new showdown.Converter();

export default (props) => {
  setTimeout(() => { utils.initMap(google, props.latitude, props.longitude) }, 0);
  let desc = props.description ? utils.convertSpecialCharsToString(props.description) : null;
  const createMarkUp = () => {
    desc = props.description ? converter.makeHtml(props.description) : "Check out Evently for more information!";
    return { __html: desc }
  }

  return (
    <StyledClickedEvent>
      <StyledModalTitle>
        {props.title}
      </StyledModalTitle>
      <Container rows={[2, 3]} cols={[1, 9]}>
        <StyledEventLocation>{`${props.city_name}, ${props.region_abbr}. ${moment(props.start_time).format('llll')}`}</StyledEventLocation>
      </Container>
      <ModalImage image={props.image}></ModalImage>
      <Description>
        <span dangerouslySetInnerHTML={createMarkUp()}>

        </span>
      </Description>
      <StyledModalMap id="event-modal-map" >
        Map did not display
      </StyledModalMap>
      <Address {...props}></Address>
    </StyledClickedEvent>
  );
};
