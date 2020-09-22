import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import ShowChartIcon from '@material-ui/icons/ShowChart'
import ControlCameraIcon from '@material-ui/icons/ControlCamera'
import RepeatIcon from '@material-ui/icons/Repeat'
import GetAppIcon from '@material-ui/icons/GetApp'
import AppsIcon from '@material-ui/icons/Apps'
import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import styled from 'styled-components'

import { editModeState, outputState, templatesState } from '../../store/atoms'
import { useNode, useEdge } from '../../logic/hooks'

// ____________________
//
const EditModeSelector: React.FC = () => {
  const [editMode, setEditMode] = useRecoilState(editModeState)
  const setOutput = useSetRecoilState(outputState)
  const setTemplates = useSetRecoilState(templatesState)
  const { resetNodes } = useNode()
  const { resetEdges } = useEdge()
  const resetAll = () => {
    if (confirm('Delete all data on nodes and edges')) {
      resetNodes()
      resetEdges()
    }
  }

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
      <EditItem
        onClick={() => {
          setOutput(true)
        }}
      >
        <GetAppIcon />
        <span>Output</span>
      </EditItem>
      <EditItem
        onClick={() => {
          setTemplates(true)
        }}
      >
        <AppsIcon />
        <span>Templates</span>
      </EditItem>
      <EditItem onClick={resetAll}>
        <RepeatIcon />
        <span>Reset</span>
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
    margin: auto;
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
