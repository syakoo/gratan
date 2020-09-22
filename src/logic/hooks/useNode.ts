import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { nodesState, Coordinate, Node } from '../../store/atoms'
import { getId } from '../utils'

// ____________________
//
export const useNode = () => {
  const [nodes, setNodes] = useRecoilState(nodesState)

  const addNode = useCallback(
    (co: Coordinate) => {
      if (nodes.find((d) => d.x == co.x && d.y == co.y)) {
        return
      }
      setNodes([
        ...nodes,
        {
          ...co,
          nodeId: getId(),
          label: 'label',
          labelPosition: 'Left',
          r: 5,
          fill: 'black',
          stroke: 'black',
          strokeWidth: 1,
          type: 'CIRCLE',
        },
      ])
    },
    [nodes, setNodes]
  )

  const updateNode = useCallback(
    (nodeId: Node['nodeId'], values: Partial<Node>) => {
      const newNodes = nodes.map((d) => {
        if (d.nodeId === nodeId) {
          return {
            ...d,
            ...values,
          }
        }
        return d
      })

      setNodes(newNodes)
    },
    [nodes, setNodes]
  )

  const deleteNode = useCallback(
    (nodeId: Node['nodeId']) => {
      setNodes((nodes) => nodes.filter((d) => d.nodeId !== nodeId))
    },
    [setNodes]
  )

  const resetNodes = useCallback(() => {
    setNodes([])
  }, [setNodes])

  return {
    nodes,
    setNodes,
    addNode,
    updateNode,
    deleteNode,
    resetNodes,
  }
}
