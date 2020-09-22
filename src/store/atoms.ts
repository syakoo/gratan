import { atom, selector } from 'recoil'

// ____________________
//
export type Coordinate = {
  x: number
  y: number
}
export type Node = Coordinate & {
  nodeId: number
  r: number
  fill: string
}
export type Edge = {
  edgeId: number
  from: Coordinate
  to: Coordinate
  width: number
  color: string
}
export type EditMode = 'NODE' | 'EDGE' | 'SELECT'
export type SelectedItem = {
  type: 'NODE' | 'EDGE'
  id: number
} | null

// ____________________
//
export const nodesState = atom<Node[]>({
  key: 'nodesState',
  default: [],
})

export const edgesState = atom<Edge[]>({
  key: 'edgesState',
  default: [],
})

export const edgeFromState = atom<Coordinate | null>({
  key: 'edgeFromState',
  default: null,
})

export const editModeState = atom<EditMode>({
  key: 'editModeState',
  default: 'NODE',
})

export const selectedItemState = atom<SelectedItem>({
  key: 'selectedItemState',
  default: null,
})

export const selectedItemData = selector({
  key: 'selectedItemData',
  get: ({ get }) => {
    const selectedItem = get(selectedItemState)
    if (selectedItem?.type === 'NODE') {
      const nodes = get(nodesState)
      const selectedNode = nodes.find((n) => n.nodeId === selectedItem.id)
      return selectedNode ? { type: 'NODE' as const, data: selectedNode } : null
    } else if (selectedItem?.type == 'EDGE') {
      const edges = get(edgesState)
      const selectedEdge = edges.find((e) => e.edgeId === selectedItem.id)
      return selectedEdge ? { type: 'EDGE' as const, data: selectedEdge } : null
    }
    return null
  },
})
