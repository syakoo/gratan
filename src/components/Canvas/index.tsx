import styled from 'styled-components'
import React, { Fragment } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import MathJax from 'react-mathjax-preview'

import {
  nodesState,
  edgesState,
  selectedItemState,
  editModeState,
} from '../../store/atoms'
import Controller from './Controller'

// ____________________
//
export const Canvas: React.FC = () => {
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
      {nodes.map((node, i) => (
        <Fragment key={i}>
          {node.type === 'CIRCLE' && (
            <circle
              key={node.nodeId}
              r={node.r}
              cx={node.x}
              cy={node.y}
              fill={node.fill}
              stroke={node.stroke}
              strokeWidth={node.strokeWidth}
            />
          )}
          {node.type === 'RECT' && (
            <rect
              key={node.nodeId}
              width={node.r * 2}
              height={node.r * 2}
              x={node.x}
              y={node.y}
              fill={node.fill}
              stroke={node.stroke}
              strokeWidth={node.strokeWidth}
              transform={`translate(-${node.r}, -${node.r})`}
            />
          )}
          <foreignObject
            x={node.x + 10}
            y={node.y - 13}
            width="100"
            height="25"
            style={{
              textAlign: node.labelPosition.includes('right')
                ? 'left'
                : node.labelPosition.includes('left')
                ? 'right'
                : 'center',
            }}
            transform={`translate(${
              node.labelPosition.includes('right')
                ? '0'
                : node.labelPosition.includes('left')
                ? '-120'
                : '-60'
            }, ${
              node.labelPosition.includes('above')
                ? '-18'
                : node.labelPosition.includes('below')
                ? '18'
                : '0'
            })`}
          >
            {
              // @ts-ignore
              <div xmlns="http://www.w3.org/1999/xhtml">
                {node.label && <MathJax math={`$${node.label}$`} />}
              </div>
            }
          </foreignObject>
        </Fragment>
      ))}
    </>
  )
}

// ____________________
//
const Container = () => (
  <>
    <g id="canvas">
      <Canvas />
    </g>
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
