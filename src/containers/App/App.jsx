import React from 'react'
import './App.css';

// styled components
import StyledApp from './StyledApp';

// Components
import SideBar from '../../components/SideBar/Sidebar';
import NavBar from '../../components/NavBar/NavBar';

export default () => {
  return (
    <StyledApp>
      <NavBar />
      <SideBar />
      {/* Search Bar */}
      {/* Events */}
    </StyledApp>
  )
}
