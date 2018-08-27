import React from 'react'
import StyledEvents from '../../assets/StyledComponents/Events/Events';
import Container from '../../assets/StyledComponents/Container/Container';

import Event from './Event/Event';

export default (props) => {
  return (
    <Container rows={[4, 16]} cols={[5, 18]}>
      <StyledEvents>
        <Event />
      </StyledEvents>
    </Container>
  )
}
