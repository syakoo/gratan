import React from 'react'
import styled from 'styled-components'

// ____________________
//
const SideBar: React.FC = ({ children }) => {
  return <StyledSideBar>{children}</StyledSideBar>
}

// ____________________
//
const StyledSideBar = styled.nav`
  background-color: ${(p) => p.theme.gray};
`

// ____________________
//
export default SideBar
