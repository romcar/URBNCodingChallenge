import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  width: 100%;
  height: 100%;

  & .event-image {
    display: inline-block;
    width: 30%;
    height: 100%;
    float: left;
  }

  & .event-info {
    display: block;
    width: 70%;
    height: 100%;
    float: right
  }
`;
