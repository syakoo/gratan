import React from 'react'
import { useRecoilValue } from 'recoil'
import styled, { keyframes } from 'styled-components'

import { selectedItemData, Edge, edgesState } from '../../store/atoms'
import NodeInfo from './NodeInfo'
import EdgeInfo from './EdgeInfo'

// ____________________
//
const SelectedItem: React.FC = () => {
  const selectedItem = useRecoilValue(selectedItemData)

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
