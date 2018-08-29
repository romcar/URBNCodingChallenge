import styled from 'styled-components';
import colors from '../../theme';
import NavImg from '../../../assets/images/HeaderImage.jpg';

export default styled.div`
  background: ${colors.sidebar};
  background-image: url(${NavImg});
  width: 100vw;
  background-size: cover;

  ${'' /* clip: rect(600px, 4300px, 900px, 0); */}
  grid-row-start: 1;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: end;
`;