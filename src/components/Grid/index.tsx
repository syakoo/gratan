import styled from 'styled-components'
import React from 'react'

import { computeDots } from '../../logic/computeDots'
import { Coordinate } from '../../store/atoms'

// ____________________
//
type Grid = {
  className?: string
  onClick?: (co: Coordinate) => void
  onMouseEnter?: (co: Coordinate) => void
  onMouseLeave?: (co: Coordinate) => void
}

// ____________________
//
const Grid: React.FC<Grid> = React.memo(
  ({ className, onClick, onMouseEnter, onMouseLeave }) => {
    const dots = computeDots(1000)

    return (
      <g className={className}>
        {dots.map((d, i) => (
          <circle
            key={i}
            r="4"
            cx={d.x}
            cy={d.y}
            onClick={onClick && (() => onClick(d))}
            onMouseEnter={onMouseEnter && (() => onMouseEnter(d))}
            onMouseLeave={onMouseLeave && (() => onMouseLeave(d))}
          />
        ))}
      </g>
    )
  }
)

// ____________________
//
export default Grid
