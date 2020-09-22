import { useCallback } from 'react'
import { useRecoilState } from 'recoil'

import { edgesState, edgeFromState, Coordinate, Edge } from '../../store/atoms'
import { getId } from '../utils'

// ____________________
//
export const useEdge = () => {
  const [edges, setEdges] = useRecoilState(edgesState)
  const [edgeFrom, setEdgeFrom] = useRecoilState(edgeFromState)

  const addEdge = useCallback(
    (co: Coordinate) => {
      if (!edgeFrom) {
        setEdgeFrom(co)
        return
      }

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
        setEdgeFrom(null)
        return
      }

      setEdges([
        ...edges,
        {
          from: edgeFrom,
          to: co,
          edgeId: getId(),
          width: 2,
          color: 'black',
        },
      ])
      setEdgeFrom(null)
    },
    [edges, setEdges, edgeFrom, setEdgeFrom]
  )

  const updateEdge = useCallback(
    (edgeId: Edge['edgeId'], values: Partial<Edge>) => {
      const newEdges = edges.map((e) => {
        if (e.edgeId === edgeId) {
          return {
            ...e,
            ...values,
          }
        }
        return e
      })
      setEdges(newEdges)
    },
    [edges, setEdges]
  )

  const deleteEdge = useCallback(
    (edgeId: Edge['edgeId']) => {
      setEdges((edges) => edges.filter((e) => e.edgeId !== edgeId))
    },
    [setEdges]
  )

  const resetEdges = useCallback(() => {
    setEdges([])
  }, [setEdges])

  return {
    edges,
    setEdges,
    addEdge,
    updateEdge,
    deleteEdge,
    resetEdges,
    edgeFrom,
    setEdgeFrom,
  }
}
