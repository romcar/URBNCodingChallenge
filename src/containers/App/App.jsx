import React, { Component } from 'react';
import './App.css';

// styled components
import StyledApp from './StyledApp';

// Components
import SideBar from '../../components/SideBar/Sidebar';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';
import Events from '../../components/Events/Events';

// temp imports
import data from '../../../seed';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
  }

  componentDidMount() {
    if (this.state.location) {

    }
  }

  getCurrentLocation() {
    // Trying HTML 5 geolocation

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const position = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          timeOfLocation: new Date()
        };
        console.log(position);

        this.setState({ location: position });
      });
    }
  }
  render() {
    return (
      <StyledApp>
        <NavBar />
        <SideBar />
        <Search getLoc={this.getCurrentLocation} />
        <Events events={data.events} />
      </StyledApp>
    );
  }
}

