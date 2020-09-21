import React from 'react'
import { useRecoilValue } from 'recoil'
import styled, { keyframes } from 'styled-components'

import { selectedItemState } from '../../store/atoms'

// ____________________
//
export const SelectedItemView: React.FC = () => {
  const selectedItem = useRecoilValue(selectedItemState)

  return (
    <>
      {selectedItem && selectedItem.type == 'NODE' && (
        <Circle cx={selectedItem.data.x} cy={selectedItem.data.y} r="20" />
      )}
      {selectedItem && selectedItem.type == 'EDGE' && (
        <Line
          x1={selectedItem.data.from.x}
          y1={selectedItem.data.from.y}
          x2={selectedItem.data.to.x}
          y2={selectedItem.data.to.y}
        />
      )}
    </>
  )
}

// ____________________
//
const breathingC = keyframes`
  from {
    r: 0;
    opacity: 1;
  } 
  to {
    r: 20;
    opacity: 0;
  }
`
const breathingL = keyframes`
  from {
    stroke-width: 0;
    opacity: 1;
  } 
  to {
    stroke-width: 20;
    opacity: 0;
  }
`

const Circle = styled.circle`
  fill: ${(p) => p.theme.secondary};
  animation: ${breathingC} 1s ease-out infinite;
`
const Line = styled.line`
  stroke: ${(p) => p.theme.secondary};
  animation: ${breathingL} 1s ease-out infinite;
`
