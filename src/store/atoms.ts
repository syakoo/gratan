import { atom } from 'recoil'

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
export type SelectedItem =
  | {
      type: 'NODE'
      data: Node
    }
  | {
      type: 'EDGE'
      data: Edge
    }
  | null

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
