import React, { Component } from 'react'

import Container from '../../assets/StyledComponents/Container/Container';
import StyledSearch from '../../assets/StyledComponents/Search/Search';
import StyledInput from '../../assets/StyledComponents/Input/Input';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.locationTimer = null;
    this.queryTimer = null;
  }

  handleLocationChange(e) {
    let location = e.target.value;

    clearTimeout(this.locationTimer);

    this.locationTimer = setTimeout(() => {
      this.setState({ location })
    }, 1000);

  }

  handleQueryChange(e) {
    let query = e.target.value;

    clearTimeout(this.queryTimer);

    this.queryTimer = setTimeout(() => {
      this.setState({ query })
    }, 1000);

  }
  render() {
    console.log(this.state)
    return (
      <Container rows={[3, 4]} cols={[7, 16]}>
        <StyledSearch>
          <StyledInput type="text" placeholder="Location" onChange={this.handleLocationChange} />
          <StyledInput type="text" placeholder="Find" onChange={this.handleQueryChange} />
          <button>Search</button>
        </StyledSearch>
      </Container>
    )
  }
}
