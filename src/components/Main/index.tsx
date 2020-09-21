import React from 'react'
import styled from 'styled-components'

import Canvas from '../Canvas'
import Grid from '../Grid'
import SelectedItem, { SelectedItemView } from '../SelectedItem'

// ____________________
//
const Main: React.FC = () => {
  return (
    <StyledMain>
      <svg viewBox="-500, -500, 1000, 1000">
        <SelectedItemView />
        <BgGrid />
        <Canvas />
      </svg>
      <SelectedItem />
    </StyledMain>
  )
}

// ____________________
//
const StyledMain = styled.main`
  background-color: ${(p) => p.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 700px;
    width: 700px;
    cursor: pointer;
  }
`
const BgGrid = styled(Grid)`
  circle {
    fill: ${(p) => p.theme.gray2};
  }
`

// ____________________
//
export default Main
