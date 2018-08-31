import styled from 'styled-components';

export default styled.button`
  position: relative;
  height: 5vh;
  width: 12vw;
  margin-left: 20px;
  float: ${props => props.float}
`;