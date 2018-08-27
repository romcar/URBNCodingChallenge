import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  background: ${colors.sidebar};

  grid-row-start: 1;
  grid-row-end: 1.5;
  grid-column-start: 1;
  grid-column-end: end;
`;