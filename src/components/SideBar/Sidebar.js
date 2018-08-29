import Container from '../../assets/StyledComponents/Container/Container';
import StyledSideBar from '../../assets/StyledComponents/SideBar/Sidebar';
import React from 'react';

export default () => {
  return (
    <Container id="sidebar" rows={[5, 'end']} cols={[1, 5]}>
      <StyledSideBar>
        Sidebar Test
      </StyledSideBar>
    </Container>
  )
}
