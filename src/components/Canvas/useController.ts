import { useCallback, useState, useEffect } from 'react'
import { useSetRecoilState, useRecoilValue } from 'recoil'

import { Coordinate, editModeState, selectedItemState } from '../../store/atoms'
import { useNode, useEdge } from '../../logic/hooks'

// ____________________
//
export const useController = () => {
  const [edgeTo, setEdgeTo] = useState<Coordinate | null>(null)
  const { nodes, addNode } = useNode()
  const { edges, addEdge, edgeFrom, setEdgeFrom } = useEdge()
  const setSelectedItem = useSetRecoilState(selectedItemState)
  const editMode = useRecoilValue(editModeState)

  useEffect(() => {
    setEdgeFrom(null)
    setEdgeTo(null)
    setSelectedItem(null)
  }, [editMode])

  const selectItem = useCallback(
    (co: Coordinate) => {
      const node = nodes.find((node) => node.x == co.x && node.y == co.y)
      if (node) {
        setSelectedItem({
          type: 'NODE',
          id: node.nodeId,
        })
        return
      }
      const edge = edges.find(
        (d) =>
          (d.from.x == co.x && d.from.y == co.y) ||
          (d.to.x == co.x && d.to.y == co.y)
      )
      if (edge) {
        setSelectedItem({
          type: 'EDGE',
          id: edge.edgeId,
        })
      }
    },
    [nodes, edges, setSelectedItem]
  )

  const onClick = useCallback(
    (co: Coordinate) => {
      switch (editMode) {
        case 'NODE':
          addNode(co)
          break
        case 'EDGE':
          addEdge(co)
          break
        case 'SELECT':
          selectItem(co)
        default:
      }
    },
    [addEdge, addNode, selectItem, editMode]
  )
  const onMouseEnter = useCallback(
    (co: Coordinate) => {
      if (edgeFrom) {
        setEdgeTo(co)
      } else {
        setEdgeTo(null)
      }
    },
    [edgeFrom, setEdgeTo]
  )
  const onMouseLeave = useCallback(
    (co: Coordinate) => {
      setEdgeTo(null)
    },
    [setEdgeTo]
  )

  return {
    onClick,
    onMouseEnter,
    onMouseLeave,
    edgeTo,
    edgeFrom,
  }
}
