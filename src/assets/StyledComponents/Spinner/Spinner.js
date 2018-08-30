import styled from 'styled-components';

export default styled.img`
  animation: rotateSpinner 1s infinite;
  width: 60px;
  height: 60px;
  display: inline-block;
  position: relative;
  z-index: 1001;
  position: relative;

  grid-row-start: 5;
  grid-row-end: 6;
  grid-column-start: 15;
  grid-column-end: 16;

  display: ${props => props.hidden ? 'none' : 'inline-block'};
  @keyframes rotateSpinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;