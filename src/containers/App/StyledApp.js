import styled from 'styled-components';
import colors from '../../assets/theme';

export default styled.div`
  background: ${colors.background};
  ${'' /* Grid */}
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
`;