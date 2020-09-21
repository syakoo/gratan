import React from 'react'
import styled from 'styled-components'

import Header from '../Header'

// ____________________
//
const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <StyledMainBody>{children}</StyledMainBody>
    </>
  )
}

// ____________________
//
const StyledMainBody = styled.div`
  height: calc(100vh - 3rem);
  display: grid;
  grid-template-columns: max-content 1fr;
`

// ____________________
//
export default Layout
