import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  background: ${colors.white};
  border: 1px solid ${colors.sidebar};
  height: 100%;
  width: 100%;
  padding: 1em;
  max-height: 75vh;
  overflow: scroll;
  transition: all 0.33s;
`;
