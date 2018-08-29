import Modal from 'react-responsive-modal';
import moment from 'moment';
import React, { Component } from 'react';
import utils from '../../../assets/utils';

// styled components
import Container from '../../../assets/StyledComponents/Container/Container';
import StyledImage from '../../../assets/StyledComponents/Image/Image';
import StyledEvent from '../../../assets/StyledComponents/Event/Event';
import StyledEventInfo from '../../../assets/StyledComponents/EventInfo/EventInfo';
import StyledEventTitle from '../../../assets/StyledComponents/EventInfo/EventTitle';
import StyledEventLocation from '../../../assets/StyledComponents/EventInfo/EventLocation';

// components
import ClickedEvent from '../../ClickedEvent/ClickedEvent';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    };

    this.toggleEventModal = this.toggleEventModal.bind(this);
  };

  toggleEventModal() {
    const { isClicked } = this.state;
    this.setState({ isClicked: !isClicked });
  };


  render() {
    const { event } = this.props;
    const { isClicked } = this.state;
    const convert = utils.convertSpecialCharsToString;
    const time = utils.formatTime(event.start_time);
    const title = utils.shortenStringByType("title", event.title);

    return (
      <StyledEvent className="event event-item event-info">
        <Container rows={[1, 4]} cols={[1, 4]}>
          {event.image ? <StyledImage src={event.image.medium.url} className="event-image" onClick={this.toggleEventModal} /> : null}
        </Container>

        <Container rows={[4, 5]} cols={[1, 10]}>
          <StyledEventLocation style={{ 'top': '20px', "padding-left": '0' }} className="event-venue">
            <a href={event.venue_url}>{event.venue_name}</a>
          </StyledEventLocation>
        </Container>

        <Container rows={[6, 8]} cols={[1, 10]}>
          <StyledEventTitle onClick={this.toggleEventModal} className="event-title">{title}</StyledEventTitle>
        </Container>

        <Container rows={[1, 2]} cols={[5, 10]}>
          <StyledEventLocation className="event-loc">
            {`${event.city_name}, ${event.region_abbr}.`}
            <br />
            <span>{`${time.date_short}`}</span>
            <br />
            <span>{`${time.time}`}</span>
          </StyledEventLocation>
        </Container>

        <Container rows={[8, 13]} cols={[1, 10]}>
          <span onClick={this.toggleEventModal} className="event-desc">
            {event.description ? convert(event.description.substring(0, 175) + "...") : 'There is no description for this event, sorry'}
          </span>
        </Container>
        <Modal open={isClicked} onClose={this.toggleEventModal} center>
          <ClickedEvent {...event}></ClickedEvent>
        </Modal>
        {/* </StyledEventInfo> */}
      </StyledEvent>
    );
  };
};

// This could possibly be broken up into further components

export default Event;