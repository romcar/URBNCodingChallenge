import styled from 'styled-components';
import colors from '../../assets/theme';

export default styled.div`
  @import url('//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css');
  background: ${colors.sidebar};
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(20, 1fr);
`;