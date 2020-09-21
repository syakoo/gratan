import React from 'react'
import { useRecoilValue } from 'recoil'

import { nodesState, edgesState } from '../../store/atoms'
import Controller from './Controller'

// ____________________
//
const Canvas: React.FC = () => {
  const nodes = useRecoilValue(nodesState)
  const edges = useRecoilValue(edgesState)
  console.log({ nodes, edges })

  return (
    <>
      {edges.map((edge) => (
        <line
          key={edge.edgeId}
          x1={edge.from.x}
          y1={edge.from.y}
          x2={edge.to.x}
          y2={edge.to.y}
          stroke={edge.color}
          strokeWidth={edge.width}
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

// ____________________
//
export default Container
