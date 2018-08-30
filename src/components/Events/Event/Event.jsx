import Modal from 'react-responsive-modal';
import React, { Component } from 'react';
// const ReactMarkdown = require('react-markdown')
import showdown from 'showdown';
import utils from '../../../assets/utils';

// styled components
import Container from '../../../assets/StyledComponents/Container/Container';
import StyledImage from '../../../assets/StyledComponents/Image/Image';
import StyledEvent from '../../../assets/StyledComponents/Event/Event';
import StyledEventTitle from '../../../assets/StyledComponents/EventInfo/EventTitle';
import StyledEventLocation from '../../../assets/StyledComponents/EventInfo/EventLocation';
import StyledDescription from '../../../assets/StyledComponents/EventInfo/EventDescription';

// components
import ClickedEvent from '../../ClickedEvent/ClickedEvent';

const converter = new showdown.Converter();
class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false
    };

    this.createMarkUp = this.createMarkUp.bind(this);
    this.toggleEventModal = this.toggleEventModal.bind(this);
  };

  toggleEventModal() {
    const { isClicked } = this.state;
    this.setState({ isClicked: !isClicked });
  };

  createMarkUp() {
    let desc = this.props.event.description ? converter.makeHtml(this.props.event.description.substring(0, 175) + "...") : "This event does not have a description.";
    return { __html: desc }
  }

  render() {
    const { event } = this.props;
    const { isClicked } = this.state;
    const time = utils.formatTime(event.start_time);
    const title = utils.shortenStringByType("title", event.title);

    return (
      <StyledEvent className="event event-item event-info">
        <Container rows={[1, 4]} cols={[1, 4]}>
          <StyledImage
            src={event.image ? event.image.medium ? event.image.medium.url : 'https://via.placeholder.com/50x50' : 'https://via.placeholder.com/50x50'}
            className="event-image"
            onClick={() => {
              this.toggleEventModal();
              this.props.saveToSidebar(event);
            }}
          />
        </Container>

        <Container rows={[4, 5]} cols={[1, 10]}>
          <StyledEventLocation style={{ 'top': '20px', "paddingLeft": '0' }} className="event-venue">
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
          <StyledDescription dangerouslySetInnerHTML={this.createMarkUp()} onClick={this.toggleEventModal} className="event-desc" >
          </StyledDescription>
        </Container>
        <Modal open={isClicked} onClose={this.toggleEventModal} center>
          <ClickedEvent {...event}></ClickedEvent>
        </Modal>
        {/* </StyledEventInfo> */}
      </StyledEvent >
    );
  };
};

// This could possibly be broken up into further components

export default Event;