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

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.LocationTimer = null;
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.getEventsFromServer = this.getEventsFromServer.bind(this);
  }

  componentDidMount() {
    this.getEventsFromServer({
      url: 'http://localhost:3000/default'
    });
  }

  getEventsFromServer({ url, location }) {
    let lat, lng;
    if (this.state.location && this.state.location.lat && this.state.location.lng) {
      lat = { lat } = this.state.location;
      lng = { lng } = this.state.location;
    }
    console.log('these are the coords: ', lat, lng)
    let loc = location || null;

    (!!lat & !!lng) ? loc = [lat, lng] : null;
    console.log('Client location: ', loc);

    axios.get(url, {
      params: {
        location: loc
      }
    })
      .then(({ data }) => {
        let events = JSON.parse(data);
        events = events.events;
        console.log('recieved', events[0])
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
        };

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

