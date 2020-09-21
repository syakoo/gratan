import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import ControlCameraIcon from '@material-ui/icons/ControlCamera'
import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { editModeState } from '../../store/atoms'

// ____________________
//
const EditModeSelector: React.FC = () => {
  const [editMode, setEditMode] = useRecoilState(editModeState)

  return (
    <>
      <EditItem
        isSelected={editMode === 'NODE'}
        onClick={() => setEditMode('NODE')}
      >
        <FiberManualRecordIcon />
        <span>Node</span>
      </EditItem>
      <EditItem
        isSelected={editMode === 'EDGE'}
        onClick={() => setEditMode('EDGE')}
      >
        <ShowChartIcon />
        <span>Edge</span>
      </EditItem>
      <EditItem
        isSelected={editMode === 'SELECT'}
        onClick={() => setEditMode('SELECT')}
      >
        <ControlCameraIcon />
        <span>Select</span>
      </EditItem>
    </>
  )
}

// ____________________
//
const EditItem = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  text-align: center;
  cursor: pointer;
  ${(p) =>
    p.isSelected &&
    `background-color: ${p.theme.secondary};
    svg {
      color: ${p.theme.white} !important;
    }
    span {
      color: ${p.theme.white} !important;
    }`}

  svg {
    width: 2em;
    height: 2em;
    color: ${(p) => p.theme.gray3};
  }
  span {
    font-size: small;
    color: ${(p) => p.theme.gray3};
  }
  &:hover {
    transition: 0.2s ease;
    background-color: ${(p) => p.theme.secondary};
    svg {
      color: ${(p) => p.theme.white};
    }
    span {
      color: ${(p) => p.theme.white};
    }
  }
`

// ____________________
//
export default EditModeSelector
