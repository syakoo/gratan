import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import styled, { keyframes } from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'

import {
  selectedItemState,
  Node,
  Edge,
  nodesState,
  edgesState,
} from '../../store/atoms'

// ____________________
//
const SelectedItem: React.FC = () => {
  const selectedItem = useRecoilValue(selectedItemState)

  return (
    <>
      {selectedItem && (
        <Modal>
          {selectedItem.type == 'NODE' && <NodeInfo node={selectedItem.data} />}
          {selectedItem.type == 'EDGE' && <EdgeInfo edge={selectedItem.data} />}
        </Modal>
      )}
    </>
  )
}

const NodeInfo: React.FC<{ node: Node }> = ({ node }) => {
  const setNodes = useSetRecoilState(nodesState)
  const setSelectedItem = useSetRecoilState(selectedItemState)
  const deleteNode = () => {
    setNodes((nodes) => nodes.filter((n) => n.nodeId !== node.nodeId))
    setSelectedItem(null)
  }

  return (
    <div>
      <div className="head">
        <span className="title">Node</span>
        <DeleteIcon onClick={deleteNode} />
      </div>
      <table>
        <tbody>
          <tr>
            <th>x</th>
            <td>{node.x}</td>
          </tr>
          <tr>
            <th>y</th>
            <td>{node.y}</td>
          </tr>
          <tr>
            <th>r</th>
            <td>{node.r}</td>
          </tr>
          <tr>
            <th>fill</th>
            <td>{node.fill}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
const EdgeInfo: React.FC<{ edge: Edge }> = ({ edge }) => {
  const setEdges = useSetRecoilState(edgesState)
  const setSelectedItem = useSetRecoilState(selectedItemState)
  const deleteNode = () => {
    setEdges((edges) => edges.filter((e) => e.edgeId !== edge.edgeId))
    setSelectedItem(null)
  }

  return (
    <div>
      <div className="head">
        <span className="title">Node</span>
        <DeleteIcon onClick={deleteNode} />
      </div>
      <table>
        <tbody>
          <tr>
            <th>from</th>
          </tr>
          <tr>
            <th>x</th>
            <td>{edge.from.x}</td>
          </tr>
          <tr>
            <th>y</th>
            <td>{edge.from.y}</td>
          </tr>
          <tr>
            <th>to</th>
          </tr>
          <tr>
            <th>x</th>
            <td>{edge.to.x}</td>
          </tr>
          <tr>
            <th>y</th>
            <td>{edge.to.y}</td>
          </tr>
          <tr>
            <th>width</th>
            <td>{edge.width}</td>
          </tr>
          <tr>
            <th>color</th>
            <td>{edge.color}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// ____________________
//
const slideIn = keyframes`
  from {
    transform: translateX(10rem);
  }
  to {
    transform: translateX(0px);
  }
`

const Modal = styled.div`
  position: fixed;
  right: 1em;
  top: 4em;
  padding: 1em;
  background-color: ${(p) => p.theme.gray3}a0;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px ${(p) => p.theme.gray3};
  animation: ${slideIn} 0.2s ease-out forwards;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 1.5em;
      font-weight: bold;
    }
    svg {
      width: 1em;
      height: 1em;
      transition: 0.2s linear;
      color: ${(p) => p.theme.white};
      &:hover {
        color: ${(p) => p.theme.red};
      }
    }
  }
`

// ____________________
//
export * from './SelectedItemView'
export default SelectedItem
