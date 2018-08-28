import React, { Component } from 'react'
import StyledClickedEvent from '../../assets/StyledComponents/ClickedEvent/ClickedEvent';
import utils from '../../assets/utils';
console.log(utils)
export default class ClickedEvent extends Component {
  constructor(props) {
    super(props);
  };
  componentDidMount() {
    utils.initMap(google, this.props.lat, this.props.lng);
    console.log('this was ran!!!!!')
  }
  render() {
    return (
      <StyledClickedEvent>
        <h2>Title</h2>
        <div id="event-modal-map">
          Map did not display
        </div>
      </StyledClickedEvent>
    );
  };
};
