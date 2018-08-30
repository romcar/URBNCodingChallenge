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

    this.state = {
      useCoords: false
    };

    this.LocationTimer = null;
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.getEventsFromServer = this.getEventsFromServer.bind(this);
    this.shouldUseTheCoordinates = this.shouldUseTheCoordinates.bind(this);
  }

  componentDidMount() {
    this.getEventsFromServer({
      url: '/default'
    });
  }

  getEventsFromServer({ url, location, time, keywords }) {
    let loc;

    if (this.state.useCoords) {
      let lat, lng;
      lat = this.state.location.lat;
      lng = this.state.location.lng;
      loc = [lat, lng];
    } else {
      loc = location || null;
    }

    console.log('Client location: ', loc);
    console.log(loc)
    axios.get(url, {
      params: {
        location: loc,
        time,
        keywords
      }
    })
      .then(({ data }) => {
        let parsedData = JSON.parse(data);
        let { events, page_number, total_items } = parsedData;
        console.log('recieved', events)
        this.setState({ events, time, location: loc, keywords, page_number, total_items, });
      })
      .catch(error => console.error(error));
  }

  shouldUseTheCoordinates(loc) {
    if (this.state.location && this.state.useCoords) {
      if (!loc) {
        this.setState({ useCoords: true });
      } else {
        this.setState({ useCoords: false });
      }
    } else {
      this.setState({ useCoords: false })
    }
  }

  getCurrentLocation() {
    // Trying HTML 5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos, err) => {
        if (err) {
          console.error(err);
        }
        const position = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          timeOfCapture: new Date()
        };

        document.getElementsByClassName('query-location')[0].value = "My Location";
        this.setState({ location: position, useCoords: true });
      });
    } else {
      alert("Geolocation not suppored by this browser.");
      this.setState({ useCoords: false });
    }
  }

  render() {
    console.log(this.state)
    return (
      <StyledApp>
        <NavBar />
        <Search
          useCoords={this.shouldUseTheCoordinates}
          getLoc={this.getCurrentLocation}
          getEvents={this.getEventsFromServer}

        />
        <SideBar />
        {this.state.events ? <Events className="events" events={this.state.events} /> : null}
      </StyledApp>
    );
  }
}

