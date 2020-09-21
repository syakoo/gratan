import React from 'react'
import styled from 'styled-components'

// ____________________
//
const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title>
        <span>Gratan🍝</span>
      </Title>
    </StyledHeader>
  )
}

// ____________________
//
const StyledHeader = styled.header`
  height: 3rem;
  display: flex;
  align-items: center;
  background-color: ${(p) => p.theme.primary};
  padding: 0em 0.4em;
`
const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${(p) => p.theme.white};
`

// ____________________
//
export default Header
