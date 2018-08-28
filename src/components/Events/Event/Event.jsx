import Modal from 'react-responsive-modal';
import moment from 'moment';
import React, { Component } from 'react';
import StyledEvent from '../../../assets/StyledComponents/Event/Event';
import utils from '../../../assets/utils';

// styled components
import StyledImage from '../../../assets/StyledComponents/Image/Image';
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

    return (
      <StyledEvent className="event">
        <StyledEventInfo className="event-item">
          <div className="event-image" onClick={this.toggleEventModal}>
            {event.image ? <StyledImage src={event.image.medium.url} /> : null}
          </div>
          <div className="event-info">
            <StyledEventTitle className="event-title">{event.title}</StyledEventTitle>
            <StyledEventLocation className="event-loc">
              {`${event.city_name}, ${event.region_abbr}. ${moment(event.start_time).format('llll')}`}
            </StyledEventLocation>
            <br />
            <StyledEventLocation className="event-venue">
              {event.venue_name}
            </StyledEventLocation>
            <br />
            <span className="event-desc">
              {event.description ? convert(event.description.substring(0, 175) + "...") : 'There is no description for this event, sorry'}
            </span>
          </div>
          <Modal open={isClicked} onClose={this.toggleEventModal} center>
            <ClickedEvent {...event}></ClickedEvent>
          </Modal>
        </StyledEventInfo>
      </StyledEvent>
    );
  };
};

// This could possibly be broken up into further components

export default Event;