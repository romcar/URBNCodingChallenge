import Container from '../../assets/StyledComponents/Container/Container';
import StyledSideBar from '../../assets/StyledComponents/SideBar/Sidebar';
import React, { Component } from 'react';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.getElementById('sidebar').addEventListener('mouseenter', () => {
      console.log(document.getElementsByClassName('previous-events-clicked'));

      document.getElementsByClassName('previous-events-clicked')[0].style.display = 'inline-block';
    })

    document.getElementById('sidebar').addEventListener('mouseleave', () => {
      document.getElementsByClassName('previous-events-clicked')[0].style.display = 'none';
    })
  }

  render() {
    return (
      <Container id="sidebar" rows={[5, 21]} cols={[1, 5]}>
        <StyledSideBar>
          <ul className="previous-events-clicked" hidden>
            <h2 style={{ 'color': 'white' }}> History </h2>
            {this.props.prevClickedEvents.map((e, i) => {
              return (<li key={i} ><a href={e.url}>{e.title}</a></li>)
            })}
          </ul>
        </StyledSideBar>
      </Container>
    );
  }
}
