import React, { Component } from 'react';
import StyledEvents from '../../assets/StyledComponents/Events/Events';
import Container from '../../assets/StyledComponents/Container/Container';

import Event from './Event/Event';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [5, 'end'],
      cols: [2, 'end']
    }
    this.shrink = this.shrink.bind(this);
    this.grow = this.grow.bind(this);
  }

  componentDidMount() {
    document.getElementById('sidebar').addEventListener('mouseenter', () => { this.shrink() })
    document.getElementById('sidebar').addEventListener('mouseleave', () => { this.grow() })
  }

  shrink() {
    this.setState({ cols: [5, 'end'] });
  }

  grow() {
    this.setState({ cols: [2, 'end'] });
  }

  render() {
    const { rows, cols } = this.state;
    return (
      <Container id="events" rows={rows} cols={cols}>
        <StyledEvents>
          {this.props.events.event.map(evnt => <Event key={evnt.id} event={evnt} />)}
        </StyledEvents>
      </Container>
    );
  };
};
