import styled from 'styled-components';
import colors from '../../theme';

export default styled.div`
  height: 32vh;
  max-width: 20%;
  box-shadow: 0.25em 0.25em 0.25em ${colors.shadow};
  display: inline-block;
  margin: 0.5em 0;
  padding: 0.5em 1.5em;
  border: 1px solid ${colors.shadow};

  display: inline-grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(9, 1fr);
  `;
