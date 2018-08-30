import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  ${'' /* -webkit-backface-visibility: hidden; */}
  ${'' /* -webkit-transform-style: preserve-3d; */}
  background: ${colors.sidebar};
  height: 100vh;
  position: relative;

  grid-row-start: 5;
  grid-row-end: end;
  grid-column-start: 1;
  grid-column-end: 2;
  width: 5vw;
  transition: width 0.35s linear;

  &:hover {
    width: 20vw;
    grid-column-end: 5;
  }

  & > ul {
    margin: auto;
    font-size: 1.5rem;
    text-decoration: none;

    & > li a {
      color: ${colors.white};
      padding: 0.5rem;
      font-size: 1.5rem;

    &:hover {
      color: ${colors["link--hover"]};
      }
    }
  }


`;
