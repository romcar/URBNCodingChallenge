import React, { Component } from 'react';
import StyledEvent from '../../../assets/StyledComponents/Event/Event';
import utils from '../../../assets/utils';
import moment from 'moment';
// styled components
import StyledImage from '../../../assets/StyledComponents/Image/Image';
import StyledEventInfo from '../../../assets/StyledComponents/EventInfo/EventInfo';
import StyledEventTitle from '../../../assets/StyledComponents/EventInfo/EventTitle';
import StyledEventLocation from '../../../assets/StyledComponents/EventInfo/EventLocation';

class Event extends Component {
  constructor(props) {
    super(props);
  }

  toggleEventModal() {
    console.log('toggling');
  }


  render() {
    const { event } = this.props;
    const convert = utils.convertSpecialCharsToString;

    return (
      <StyledEvent className="event">
        <StyledEventInfo className="event-item" onClick={this.toggleEventModal}>
          <div className="event-image">
            {event.image ? <StyledImage src={event.image.medium.url} /> : null}
          </div>
          <div className="event-info">
            <StyledEventTitle className="event-title">{event.title}</StyledEventTitle><StyledEventLocation className="event-loc">{`${event.city_name}, ${event.region_abbr}. ${moment(event.start_time).format('llll')}`}</StyledEventLocation>
            <br />
            <StyledEventLocation className="event-venue">{event.venue_name}</StyledEventLocation>
            <br />
            <span className="event-desc">{event.description ? convert(event.description.substring(0, 200)) : 'There is no description for this event, sorry'}</span>
          </div>
        </StyledEventInfo>
      </StyledEvent>
    );
  }
}

export default Event;