import styled from 'styled-components';
import colors from '../../theme';
import NavImg from '../../../assets/images/HeaderImage.jpg';

export default styled.div`
  background: ${colors.sidebar};
  background-image: url(${NavImg});
  grid-row-start: 1;
  grid-row-end: 5;
  grid-column-start: 1;
  grid-column-end: end;
`;