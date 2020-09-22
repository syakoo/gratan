import React from 'react'
import styled, { keyframes } from 'styled-components'

// ____________________
//
type Modal = {
  handleClose: () => void
  isDisplay: boolean
}

// ____________________
//
const Modal: React.FC<Modal> = ({ children, handleClose, isDisplay }) => {
  if (!isDisplay) return <></>

  return (
    <>
      <Bg onClick={handleClose} />
      <Body>{children}</Body>
    </>
  )
}

// ____________________
//
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%,-100%);
  }
  to {
    opacity: 1;
    transform: translate(-50%,-50%);
  }
`

const Bg = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  background-color: ${(p) => p.theme.gray3};
  opacity: 0.5;
`

const Body = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  background-color: ${(p) => p.theme.gray};
  animation: ${slideIn} 0.2s ease-out forwards;
  padding: 1em;
  max-width: 90%;
`

// ____________________
//
export default Modal
