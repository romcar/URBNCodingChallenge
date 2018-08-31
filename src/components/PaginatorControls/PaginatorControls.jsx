import React from 'react'

// Styled Components
import Container from '../../assets/StyledComponents/Container/Container';
import styled from 'styled-components';
import StyledPaginationControl from '../../assets/StyledComponents/Pagination/Controls';

let ModifiedContainer = styled(Container)`
  margin: auto;
  padding: 5px;
`;

export default (props) => {
  return (
    <ModifiedContainer rows={[5, 6]} cols={[2, 21]} >
      <StyledPaginationControl float={'left'}
        className="glyphicon glyphicon-arrow-left"
        onClick={props.prev}>
      </StyledPaginationControl>
      <span style={{ color: 'white', fontSize: '3rem', position: 'relative', paddingLeft: '15px' }}>{props.page_number}</span>
      <StyledPaginationControl float={'right'}
        className="glyphicon glyphicon-arrow-right"
        onClick={props.next} >
      </StyledPaginationControl>
    </ModifiedContainer>
  )
}
