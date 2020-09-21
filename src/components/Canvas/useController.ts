import { useCallback, useState, useEffect } from 'react'
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil'

import {
  nodesState,
  edgeFromState,
  edgesState,
  Coordinate,
  editModeState,
  selectedItemState,
} from '../../store/atoms'

// ____________________
//
export const useController = () => {
  const [edgeTo, setEdgeTo] = useState<null | Coordinate>(null)
  const [edgeFrom, setEdgeFrom] = useRecoilState(edgeFromState)
  const [nodes, setNodes] = useRecoilState(nodesState)
  const [edges, setEdges] = useRecoilState(edgesState)
  const setSelectedItem = useSetRecoilState(selectedItemState)
  const editMode = useRecoilValue(editModeState)

  useEffect(() => {
    setEdgeFrom(null)
    setEdgeTo(null)
    setSelectedItem(null)
  }, [editMode])

  const addNode = useCallback(
    (co: Coordinate) => {
      setNodes((nodes) => {
        if (nodes.find((d) => d.x == co.x && d.y == co.y)) {
          return [...nodes]
        }
        return [
          ...nodes,
          {
            ...co,
            nodeId: getId(),
            r: 5,
            fill: 'black',
          },
        ]
      })
    },
    [setNodes]
  )

  const addEdge = useCallback(
    (co: Coordinate) => {
      if (edgeFrom) {
        setEdges((edges) => {
          if (
            edges.find(
              (d) =>
                (d.from.x == co.x &&
                  d.from.y == co.y &&
                  d.to.x == edgeFrom.x &&
                  d.to.y == edgeFrom.y) ||
                (d.to.x == co.x &&
                  d.to.y == co.y &&
                  d.from.x == edgeFrom.x &&
                  d.from.y == edgeFrom.y)
            )
          ) {
            return [...edges]
          }
          return [
            ...edges,
            {
              from: edgeFrom,
              to: co,
              edgeId: getId(),
              width: 2,
              color: 'black',
            },
          ]
        })
        setEdgeFrom(null)
      } else {
        setEdgeFrom(co)
      }
    },
    [setEdges, edgeFrom, setEdgeFrom]
  )

  const selectItem = useCallback(
    (co: Coordinate) => {
      const node = nodes.find((node) => node.x == co.x && node.y == co.y)
      if (node) {
        setSelectedItem({
          type: 'NODE',
          data: node,
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
          data: edge,
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

const getId = (): number => {
  const now = new Date()
  return now.getTime()
}
