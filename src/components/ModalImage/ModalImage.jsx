import React from 'react'

// styled components
import Container from '../../assets/StyledComponents/Container/Container';
import StyledModalimage from '../../assets/StyledComponents/ModalImage/ModalImage';
export default ({ image }) => {

  return (
    <Container rows={[3, 8]} cols={[1, 5]}>
      <StyledModalimage src={image.medium.url}></StyledModalimage>
    </Container>
  )
}
