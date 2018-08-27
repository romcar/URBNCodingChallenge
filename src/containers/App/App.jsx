import React from 'react'
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

console.log(data.events)
export default () => {
  return (
    <StyledApp>
      <NavBar />
      <SideBar />
      <Search />
      <Events events={data.events} />
    </StyledApp>
  )
}
