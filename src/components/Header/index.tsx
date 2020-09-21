import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub'

// ____________________
//
const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title>
        <span>Gratan🍝</span>
      </Title>
      <a href="https://github.com/syakoo/gratan">
        <GitHubIcon />
      </a>
    </StyledHeader>
  )
}

// ____________________
//
const StyledHeader = styled.header`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme.primary};
  padding: 0em 0.5em;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(p) => p.theme.white};
    svg {
      margin: auto;
    }
  }
`
const Title = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  color: ${(p) => p.theme.white};
`

// ____________________
//
export default Header
