import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Spinner from '../../assets/images/spinner.png';


// styled components
import Container from '../../assets/StyledComponents/Container/Container';
import StyledApp from './StyledApp';
import StyledSpinner from '../../assets/StyledComponents/Spinner/Spinner';

// Components
import Events from '../../components/Events/Events';
import NavBar from '../../components/NavBar/NavBar';
import PaginatorControls from '../../components/PaginatorControls/PaginatorControls';
import SideBar from '../../components/SideBar/Sidebar';
import Search from '../../components/Search/Search';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      useCoords: false,
      previouslyClickedEvents: []
    };

    this.addEventToSideBar = this.addEventToSideBar.bind(this);
    this.getCurrentLocation = this.getCurrentLocation.bind(this);
    this.getEventsFromServer = this.getEventsFromServer.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
    this.LocationTimer = null;
    this.shouldUseTheCoordinates = this.shouldUseTheCoordinates.bind(this);
    this.startSpinner = this.startSpinner.bind(this);
    this.stopSpinner = this.stopSpinner.bind(this);
  }

  componentDidMount() {
    this.getEventsFromServer({
      url: '/default',
      time: new Date()
    });
  }

  getEventsFromServer({ url, location, time, keywords, page_number }) {
    this.startSpinner();
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
        let { events, page_number, page_count, page_size } = parsedData;
        this.stopSpinner();
        console.log(parsedData);

        this.setState({
          events,
          time,
          location: loc,
          keywords,
          page_number,
          page_count,
          page_size
        });
      })
      .catch(error => console.error(error));
  }

  startSpinner() {
    console.log('starting spinner')
    document.getElementById('spinner').style.display = 'inline-block';
  }

  stopSpinner() {
    document.getElementById('spinner').style.display = 'none';
  }

  addEventToSideBar({ title, url, id }) {
    let eventObj = {
      title, url, id
    }

    eventObj.title = eventObj.title.substr(0, 23);

    const prevItems = this.state.previouslyClickedEvents;
    this.setState({ previouslyClickedEvents: prevItems.concat(eventObj) })
  }

  getNextPage() {
    let { page_number, location, time, keywords, page_count } = this.state;

    page_number = Number(page_number) + 1;
    if (page_number > page_count) {
      page_number = 1;
    }
    console.log(page_number <= Number(page_count), page_number, page_count);

    if (page_number <= Number(page_count)) {
      console.log('hey')
      this.getEventsFromServer({
        url: '/search',
        location,
        time,
        keywords,
        page_number
      });
    } else {
      this.getEventsFromServer({
        url: '/search',
        location,
        time,
        keywords,
        page_number: 1
      });
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
      this.getEventsFromServer({
        url: '/search',
        location,
        time,
        keywords,
        page_number: this.state.page_count
      });
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
        <Container style={{ color: 'white', margin: 'auto' }} rows={[2, 3]} cols={[7, 16]}>
          <h1>Find an event around you</h1>
        </Container>
        <NavBar />
        <Search
          useCoords={this.shouldUseTheCoordinates}
          getLoc={this.getCurrentLocation}
          getEvents={this.getEventsFromServer}
        />
        <PaginatorControls
          page_number={this.state.page_number}
          next={this.getNextPage}
          prev={this.getPrevPage} />
        <SideBar prevClickedEvents={this.state.previouslyClickedEvents} />
        {this.state.events ?
          <Events
            saveToSidebar={this.addEventToSideBar}
            className="events"
            events={this.state.events}
          /> : null}
        <StyledSpinner id='spinner' src={Spinner} hidden />
      </StyledApp>
    );
  }
}

