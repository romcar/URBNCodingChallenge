import DatePicker from 'react-date-picker';
import React, { Component, Fragment } from 'react'
import styled from 'styled-components';

import Container from '../../assets/StyledComponents/Container/Container';
// import StyledSearch from '../../assets/StyledComponents/Search/Search';
import StyledInput from '../../assets/StyledComponents/Input/Input';
import StyledButton from '../../assets/StyledComponents/Input/Button';

const StyledDatePicker = styled(DatePicker)`
  display: inline-block;
  background-color: white;
  height: 5vh;
`;
export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.locationTimer = null;
    this.queryTimer = null;
  }

  handleLocationChange(e) {
    let location = e.target.value;

    clearTimeout(this.locationTimer);

    this.locationTimer = setTimeout(() => {
      this.setState({ location })
    }, 200);

  }

  handleQueryChange(e) {
    let query = e.target.value;

    clearTimeout(this.queryTimer);

    this.queryTimer = setTimeout(() => {
      this.setState({ query })
    }, 1000);

  }

  handleDateChange(newDate) {
    const { date } = this.state;
    newDate !== date ? this.setState({ newDate }) : null;
  }

  render() {
    return (
      <Container style={{ 'margin': 'auto' }} rows={[2, 4]} cols={[4, 17]}>
        <Fragment>
          <StyledInput
            style={{ 'borderRadius': '0.5em 0 0 0.5em' }}
            className='query-location'
            type="text" placeholder="city, state"
            onChange={this.handleLocationChange} />
          <StyledButton
            onClick={this.props.getLoc}
            className="glyphicon glyphicon-map-marker"
          />
        </Fragment>

        {/* <StyledInput> */}
        <StyledDatePicker
          value={this.state.date}
          placeholderText="When you looking?"
          selected={this.state.date}
          onChange={this.handleDateChange}
        />
        {/* </StyledInput> */}
        {/* <StyledInput
          type="text"
          placeholder="today, next week, this week"
          onChange={this.handleQueryChange} /> */}
        {/* <StyledButton
          className="glyphicon glyphicon-calendar"
        ></StyledButton> */}

        <StyledInput
          type="text"
          placeholder="music, dancing"
          onChange={this.handleQueryChange} />
        <StyledButton
          style={{ 'borderRadius': '0 0.5em 0.5em 0' }}
          className="glyphicon glyphicon-search"
        ></StyledButton>
      </Container>
    )
  }
}
