import React from 'react'
import styled from 'styled-components'

import { useController } from './useController'
import Grid from '../Grid'

// ____________________
//
const Controller: React.FC = React.memo(() => {
  const {
    onClick,
    onMouseEnter,
    onMouseLeave,
    edgeFrom,
    edgeTo,
  } = useController()

  return (
    <>
      <StyledGrid
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      {edgeFrom && edgeTo && (
        <line x1={edgeFrom.x} y1={edgeFrom.y} x2={edgeTo.x} y2={edgeTo.y} stroke="#444" />
      )}
    </>
  )
})

// ____________________
//
const StyledGrid = styled(Grid)`
  circle {
    fill: transparent;
    r: 20;

    &:hover {
      stroke: ${(p) => p.theme.secondary};
      stroke-width: 2px;
    }
  }
`

// ____________________
//
export default Controller
