import colors from '../../theme';
import styled from 'styled-components';

export default styled.span`
  color: ${colors.eventLocation};
  width: 100%;
  position: relative;
  font-size: 14px;

  > a {
    color: ${colors.eventLocation};
    text-decoration: none;

    &:hover {
      color: ${colors["link--hover"]};
    }
  }
  @media screen and (max-width: 1430px) {
    padding-left: 20px;

    > span {
    padding-left: 20px;
    }
  }
  @media screen and (max-width: 925px) {
    padding-left: 10px;

    > span {
    padding-left: 10px;
    }
  }
`;
