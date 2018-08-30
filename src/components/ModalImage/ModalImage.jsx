import React from 'react'

// styled components
import Container from '../../assets/StyledComponents/Container/Container';
import StyledModalimage from '../../assets/StyledComponents/ModalImage/ModalImage';
export default ({ image }) => {

  return (
    <Container rows={[3, 8]} cols={[2, 6]}>
      <StyledModalimage src={image ? image.large ? image.large.url : 'https://via.placeholder.com/100x100' : 'https://via.placeholder.com/100x100'}></StyledModalimage>
    </Container>
  )
}
