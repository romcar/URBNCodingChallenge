import React from 'react'
import StyledDescription from '../../assets/StyledComponents/ModalDescription/ModalDescription';

export default (props) => {
  return (
    <StyledDescription>
      {props.desc || "This even does not have a description. Click on the venue name to go get more information"}
    </StyledDescription>
  )
}
