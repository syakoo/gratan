import styled from 'styled-components'
import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import {
  nodesState,
  edgesState,
  selectedItemState,
  editModeState,
} from '../../store/atoms'
import Controller from './Controller'

// ____________________
//
const Canvas: React.FC = () => {
  const nodes = useRecoilValue(nodesState)
  const edges = useRecoilValue(edgesState)
  const editMode = useRecoilValue(editModeState)
  const setSelectedItem = useSetRecoilState(selectedItemState)

  return (
    <>
      {edges.map((edge) => (
        <Line
          key={edge.edgeId}
          x1={edge.from.x}
          y1={edge.from.y}
          x2={edge.to.x}
          y2={edge.to.y}
          stroke={edge.color}
          strokeWidth={edge.width}
          onClick={() =>
            editMode === 'SELECT' &&
            setSelectedItem({ type: 'EDGE', id: edge.edgeId })
          }
        />
      ))}
      {nodes.map((node) => (
        <circle
          key={node.nodeId}
          r={node.r}
          cx={node.x}
          cy={node.y}
          fill={node.fill}
        />
      ))}
    </>
  )
}

// ____________________
//
const Container = () => (
  <>
    <Canvas />
    <Controller />
  </>
)

const Line = styled.line`
  &:hover {
    stroke-width: 8px;
  }
`

// ____________________
//
export default Container
