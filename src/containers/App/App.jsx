import axios from 'axios';
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
    this.LocationTimer = null;
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.getEventsFromServer = this.getEventsFromServer.bind(this);
  }

  componentDidMount() {
    this.getCurrentLocation();

    clearTimeout(this.locationTimer);
    this.locationTimer = setTimeout(() => {
      this.getEventsFromServer();
    }, 100);
  }

  getEventsFromServer(location, ) {
    let { lat, lng } = this.state.location;
    let loc = location || null;

    (!!lat & !!lng) ? loc = [lat, lng] : null;
    console.log('Client location: ', loc)
    axios.get('http://localhost:3000/search', {
      params: {
        location: loc
      }
    })
      .then(({ data }) => {
        let events = JSON.parse(data);
        events = events.events;
        this.setState({ events });
      })
      .catch(error => console.error(error));
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
        // console.log(position);
        // console.log(document.getElementsByClassName('query-location'));
        document.getElementsByClassName('query-location')[0].value = "My Location";
        this.setState({ location: position });
      });
    }
  }

  render() {
    console.log();

    console.log(this.state)
    return (
      <StyledApp>
        <NavBar />
        <Search getLoc={this.getCurrentLocation} />
        <SideBar />
        {this.state.events ? <Events className="events" events={this.state.events} /> : null}
      </StyledApp>
    );
  }
}

