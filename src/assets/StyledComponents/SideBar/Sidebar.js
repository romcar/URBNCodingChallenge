import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  background: ${colors.sidebar};
  height: 100vh;
  position: relative;
  top: -5px;
  grid-row-start: 5;
  grid-row-end: end;
  grid-column-start: 1;
  grid-column-end: 2;
  width: 5vw;
  transition: width 0.35s;

  :hover {
    width: 20vw;
  }
`;
