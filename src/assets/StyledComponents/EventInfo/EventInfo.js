import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  ${'' /* width: 100%;
  height: 100%; */}

  & .event-image {
    display: block;
    width: 20%;
    height: 100%;
  }

  & .event-info {
    display: block;
    width: 80%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }
`;
