import React from 'react';
import StyledEvents from '../../assets/StyledComponents/Events/Events';
import Container from '../../assets/StyledComponents/Container/Container';

import Event from './Event/Event';

export default props => (
  <Container rows={[4, 18]} cols={[5, 18]}>
    <StyledEvents>
      {props.events.event.map(evnt => <Event key={evnt.id} event={evnt} />)}
    </StyledEvents>
  </Container>
);
