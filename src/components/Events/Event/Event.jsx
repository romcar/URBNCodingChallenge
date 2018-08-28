import React, { Component } from 'react';
import StyledEvent from '../../../assets/StyledComponents/Event/Event';


// styled components
import StyledImage from '../../../assets/StyledComponents/Image/Image';
import StyledEventInfo from '../../../assets/StyledComponents/EventInfo/EventInfo';
import StyledEventTitle from '../../../assets/StyledComponents/EventInfo/EventTitle';
import StyledEventLocation from '../../../assets/StyledComponents/EventInfo/EventLocation';

export default class Event extends Component {
  constructor(props) {
    super(props);

    // this.convertSpecialCharsToString = this.this.convertSpecialCharsToString.bind(this);
  }

  toggleEventModal() {
    console.log('toggling');
  }

  convertSpecialCharsToString(string) {
    let newString = string;
    newString = newString.replace(/&quot;/ig, '"');
    newString = newString.replace(/&lt;/ig, '<');
    newString = newString.replace(/&gt;/ig, '>');
    newString = newString.replace(/&amp;/ig, '&');
    newString = newString.replace(/&#039;/ig, "'");
    return newString;
  }

  render() {
    const { event } = this.props;
    const convert = this.convertSpecialCharsToString;

    return (
      <StyledEvent>
        <StyledEventInfo onClick={this.toggleEventModal}>
          <div className="event-image">
            {event.image ? <StyledImage src={event.image.medium.url} /> : null}
          </div>
          <div className="event-info">
            <StyledEventTitle>{event.title}</StyledEventTitle><StyledEventLocation>{`${event.city_name}, ${event.region_abbr}`}</StyledEventLocation>
            <br />
            <span>{event.description ? convert(event.description.substring(0, 200)) : null}</span>
          </div>
        </StyledEventInfo>
      </StyledEvent >
    );
  }
}
