import React from 'react';
import StyledEvent from '../../../assets/StyledComponents/Event/Event';


// styled components
import StyledImage from '../../../assets/StyledComponents/Image/Image';
import StyledEventInfo from '../../../assets/StyledComponents/EventInfo/EventInfo';
import StyledEventTitle from '../../../assets/StyledComponents/EventInfo/EventTitle';
import StyledEventLocation from '../../../assets/StyledComponents/EventInfo/EventLocation';

export default ({ event }) => {
  console.log(event);

  const convertSpecialCharsToString = (string) => {
    let newString = string;
    newString = newString.replace(/&quot;/ig, '"');
    newString = newString.replace(/&lt;/ig, '<');
    newString = newString.replace(/&gt;/ig, '>');
    newString = newString.replace(/&amp;/ig, '&');
    newString = newString.replace(/&#039;/ig, "'");
    return newString;
  };

  return (
    <StyledEvent>
      <StyledEventInfo>
        <div className="event-image">
          {event.image ? <StyledImage src={event.image.medium.url} /> : null}
        </div>
        <div className="event-info">
          <StyledEventTitle>{event.title}</StyledEventTitle><StyledEventLocation>{`${event.city_name}, ${event.region_abbr}`}</StyledEventLocation>
          <br />
          <span>{event.description ? convertSpecialCharsToString(event.description.substring(0, 200)) : null}</span>
        </div>
      </StyledEventInfo>
    </StyledEvent>
  );
};
