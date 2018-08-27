import React, { Component } from 'react'
import StyledSearch from '../../assets/StyledComponents/Search/Search';
import Container from '../../assets/StyledComponents/Container/Container';

export default class Search extends Component {
  render() {
    return (
      <Container rows={[3, 4]} cols={[7, 16]}>
        <StyledSearch type="text" />
      </Container>
    )
  }
}
