import colors from '../../theme';
import styled from 'styled-components';

export default styled.button`
  height: 51px;
  width: 5vh;
  border: 1px solid ${colors.sidebar};

  &:hover {
    border: 1px solid ${colors["link--hover"]};
  }
`;