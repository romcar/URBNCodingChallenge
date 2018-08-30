import React, { Component } from 'react';
import StyledEvents from '../../assets/StyledComponents/Events/Events';
import Container from '../../assets/StyledComponents/Container/Container';

import Event from './Event/Event';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [6, 21],
      cols: [2, 21]
    }
    this.shrink = this.shrink.bind(this);
    this.grow = this.grow.bind(this);
  }

  componentDidMount() {
    document.getElementById('sidebar').addEventListener('mouseenter', () => {
      document.getElementById('events').setAttribute('width', '99%');
      this.shrink();
    })
    document.getElementById('sidebar').addEventListener('mouseleave', () => {
      document.getElementById('events').setAttribute('width', '100%');
      this.grow();
    })
  }

  shrink() {
    this.setState({ cols: [5, 21] });
  }

  grow() {
    this.setState({ cols: [2, 21] });
  }

  render() {
    const { rows, cols } = this.state;
    return (
      <Container id="events" rows={rows} cols={cols}>
        <StyledEvents
          style={{ height: '100vh' }}>
          {this.props.events.event.map(evnt => <Event saveToSidebar={this.props.saveToSidebar} key={evnt.id} event={evnt} />)}
        </StyledEvents>
      </Container>
    );
  };
};
