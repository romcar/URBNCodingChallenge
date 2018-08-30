import axios from 'axios';
import React, { Component } from 'react';
import './App.css';

// styled components
import StyledApp from './StyledApp';

// Components
import Events from '../../components/Events/Events';
import SideBar from '../../components/SideBar/Sidebar';
import Search from '../../components/Search/Search';
import NavBar from '../../components/NavBar/NavBar';
import PaginatorControls from '../../components/PaginatorControls/PaginatorControls';

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
    this.getNextPage = this.getNextPage.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
  }

  componentDidMount() {
    this.getEventsFromServer({
      url: '/default',
      time: new Date()
    });
  }

  getEventsFromServer({ url, location, time, keywords, page_number }) {
    let loc;

    if (this.state.useCoords) {
      let lat, lng;
      lat = this.state.location.lat;
      lng = this.state.location.lng;
      loc = [lat, lng];
    } else {
      loc = location || null;
    }

    page_number = page_number ? page_number : this.state.page_number ? this.state.page_number : 1;

    console.log('Client location: ', loc, page_number);
    console.log(loc)
    axios.get(url, {
      params: {
        location: loc,
        time,
        keywords,
        page_number
      }
    })
      .then(({ data }) => {
        let parsedData = JSON.parse(data);
        let { events, page_number, total_items, page_size } = parsedData;
        console.log('recieved', events)
        this.setState({ events, time, location: loc, keywords, page_number, total_items, page_size });
      })
      .catch(error => console.error(error));
  }

  getNextPage() {
    let { page_number, location, time, keywords } = this.state;
    page_number = Number(page_number) + 1;

    let maxPageCount = Math.ceil(this.state.total_items / this.state.page_size);

    if (page_number < maxPageCount) {
      this.getEventsFromServer({
        url: '/search',
        location,
        time,
        keywords,
        page_number
      });
    } else {
      console.log('display error 2')
    }
  };

  getPrevPage() {
    let { page_number, location, time, keywords } = this.state;
    page_number = Number(page_number) - 1;

    if (page_number > 0) {
      this.getEventsFromServer({
        url: '/search',
        location,
        time,
        keywords,
        page_number
      });
    } else {
      console.log('display error')
    }
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
        <PaginatorControls
          next={this.getNextPage}
          prev={this.getPrevPage} />
        <SideBar />
        {this.state.events ? <Events className="events" events={this.state.events} /> : null}
      </StyledApp>
    );
  }
}

