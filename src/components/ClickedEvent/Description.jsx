import React from 'react'
import StyledDescription from '../../assets/StyledComponents/ModalDescription/ModalDescription';

export default (props) => {
  return (
    <StyledDescription>
      {props.children}
    </StyledDescription>
  )
}
