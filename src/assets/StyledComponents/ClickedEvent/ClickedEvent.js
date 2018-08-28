import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  height: 80vh;
  ${'' /* width: 90vw; */}
  padding: 1em;
  display: grid;
  grid-template-rows: repeat(15, 1fr);
  grid-template-columns: repeat(15, 1fr);
`;