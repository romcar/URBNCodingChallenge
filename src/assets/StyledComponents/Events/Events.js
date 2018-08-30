import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.sidebar};
  height: 100vh;
  width: 100%;
  padding: 4em 5em;
  overflow: scroll;
  transition: width 0.34s;
`;
