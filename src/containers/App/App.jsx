import React from 'react'
import './App.css';

// styled components
import StyledApp from './StyledApp';

// Components
import SideBar from '../../components/SideBar/Sidebar';
import NavBar from '../../components/NavBar/NavBar';
import Search from '../../components/Search/Search';

export default () => {
  return (
    <StyledApp>
      <NavBar />
      <SideBar />
      <Search />
      <Events />
    </StyledApp>
  )
}
