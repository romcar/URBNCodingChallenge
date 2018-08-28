import styled from 'styled-components';

export default styled.div`
  display: inline-block;
  position: relative;

  grid-row-start: ${props => props.rows[0]};
  grid-row-end: ${props => props.rows[1]};
  grid-column-start: ${props => props.cols[0]};
  grid-column-end: ${props => props.cols[1]};
`