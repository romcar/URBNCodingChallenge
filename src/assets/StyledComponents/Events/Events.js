import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.sidebar};
  height: 100%;
  width: 100%;
  padding: 1em;
  border-radius: 0.5em;

  grid-row-start: 4;
  grid-row-end: 16;
  grid-column-start: 5;
  grid-column-end: 18;
`;