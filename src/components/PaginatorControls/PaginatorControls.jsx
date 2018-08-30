import React from 'react'

// Styled Components
import Container from '../../assets/StyledComponents/Container/Container';
import styled from 'styled-components';
import StyledPaginationControl from '../../assets/StyledComponents/Pagination/Controls';

let ModifiedContainer = styled(Container)`
  @media screen and (max-width: 1000px) {
    grid-row-start: ${props => props.rows[0]};
    grid-row-end: ${props => props.rows[1]};
    grid-column-start: ${props => props.cols[0] - 2};
    grid-column-end: ${props => props.cols[1] + 2};
    margin: auto;
  }
`;

export default (props) => {
  return (
    <ModifiedContainer rows={[5, 6]} cols={[9, 13]} >
      <StyledPaginationControl onClick={props.prev}>
        prev
      </StyledPaginationControl>
      <StyledPaginationControl onClick={props.next} >
        next
      </StyledPaginationControl>
    </ModifiedContainer>
  )
}
