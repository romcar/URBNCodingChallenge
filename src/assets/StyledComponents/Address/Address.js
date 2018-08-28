import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  grid-row-start: 7;
  grid-row-end: 9;
  grid-column-start: 10;
  grid-column-end: 16;
  color: ${colors.eventLocation};
  margin-top: 15px;

  a {
    text-decoration: none;
    color: ${colors.eventLocation};

    :hover {
      color: ${colors["link--hover"]}
    }
  }
`;
