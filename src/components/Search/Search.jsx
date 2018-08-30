import DatePicker from 'react-date-picker';
import React, { Component, Fragment } from 'react'
import styled from 'styled-components';

import Container from '../../assets/StyledComponents/Container/Container';
// import StyledSearch from '../../assets/StyledComponents/Search/Search';
import StyledInput from '../../assets/StyledComponents/Input/Input';
import StyledButton from '../../assets/StyledComponents/Input/Button';
// import utils from '../../assets/utils';

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
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.locationTimer = null;
    this.keywordTimer = null;
  }

  handleLocationChange(e) {
    let location = e.target.value;

    clearTimeout(this.locationTimer);

    this.locationTimer = setTimeout(() => {
      this.setState({ location })
    }, 200);

  }

  handleKeywordChange(e) {
    let keywords = e.target.value;

    clearTimeout(this.keywordTimer);

    this.keywordTimer = setTimeout(() => {
      this.setState({ keywords })
    }, 1000);

  }

  handleDateChange(date) {
    this.setState({ date });
  }

  render() {
    const { date } = this.state;
    return (
      <Container style={{ 'margin': 'auto' }} rows={[2, 4]} cols={[5, 18]}>
        <Fragment>
          <StyledInput
            style={{ 'borderRadius': '0.5em 0 0 0.5em' }}
            className='query-location'
            type="text" placeholder="city, state"
            onChange={this.handleLocationChange}
          />
          <StyledButton
            onClick={this.props.getLoc}
            className="glyphicon glyphicon-map-marker"
          />
        </Fragment>

        <StyledDatePicker
          value={date || new Date()}
          placeholderText="When you looking?"
          selected={this.state.date}
          onChange={this.handleDateChange}
        />

        <StyledInput
          type="text"
          placeholder="music, dancing"
          onChange={this.handleKeywordChange}
        />

        <StyledButton
          style={{ 'borderRadius': '0 0.5em 0.5em 0' }}
          className="glyphicon glyphicon-search"
          onClick={() => {
            this.props.useCoords(this.state.location);
            this.props.getEvents({
              url: '/search',
              location: this.state.location,
              time: this.state.date,
              keywords: this.state.keywords
            });
          }}
        ></StyledButton>
      </Container>
    )
  }
}
