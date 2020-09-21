import React from 'react'
import { useRecoilValue } from 'recoil'
import styled, { keyframes } from 'styled-components'

import { selectedItemState, Node, Edge } from '../../store/atoms'

// ____________________
//
const SelectedItem: React.FC = () => {
  const selectedItem = useRecoilValue(selectedItemState)

  return (
    <>
      {selectedItem && (
        <Modal>
          {selectedItem.type == 'NODE' && <NodeInfo node={selectedItem.data} />}
        </Modal>
      )}
    </>
  )
}

const NodeInfo: React.FC<{ node: Node }> = ({ node }) => {
  return (
    <div>
      <h2>Node</h2>
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

  h2 {
    margin: 0px;
  }
`

// ____________________
//
export default SelectedItem
