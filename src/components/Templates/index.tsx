import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import Modal from '../Modal'
import { templatesState, Edge, Node } from '../../store/atoms'
import { useEdge, useNode } from '../../logic/hooks'

// ____________________
//
type TemplateData = { title: string; edges: Edge[]; nodes: Node[] }[]
const templateData: TemplateData = [
  {
    title: 'Complete Graph(K6)',
    nodes: [
      {
        fill: 'white',
        label: 'a',
        labelPosition: 'above',
        nodeId: 1600764906654,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: 0,
        y: -216,
      },
      {
        fill: 'white',
        label: 'f',
        labelPosition: 'above left',
        nodeId: 1600764907605,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: -187.06148721743872,
        y: -108,
      },
      {
        fill: 'white',
        label: 'e',
        labelPosition: 'below left',
        nodeId: 1600764908477,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: -187.06148721743872,
        y: 108,
      },
      {
        fill: 'white',
        label: 'd',
        labelPosition: 'below',
        nodeId: 1600764909245,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: 0,
        y: 216,
      },
      {
        fill: 'white',
        label: 'c',
        labelPosition: 'below right',
        nodeId: 1600764910181,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: 187.06148721743872,
        y: 108,
      },
      {
        fill: 'white',
        label: 'b',
        labelPosition: 'above right',
        nodeId: 1600764911509,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: 187.06148721743872,
        y: -108,
      },
    ],
    edges: [
      {
        color: 'black',
        edgeId: 1600764484231,
        from: { x: -187.06148721743872, y: -108 },
        to: { x: 0, y: -216 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764485606,
        from: { x: 0, y: -216 },
        to: { x: 187.06148721743872, y: -108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764486814,
        from: { x: 187.06148721743872, y: -108 },
        to: { x: 187.06148721743872, y: 108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764488934,
        from: { x: 187.06148721743872, y: 108 },
        to: { x: 0, y: 216 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764490070,
        from: { x: 0, y: 216 },
        to: { x: -187.06148721743872, y: 108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764491407,
        from: { x: -187.06148721743872, y: 108 },
        to: { x: -187.06148721743872, y: -108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764493063,
        from: { x: 0, y: -216 },
        to: { x: -187.06148721743872, y: 108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764495054,
        from: { x: 0, y: -216 },
        to: { x: 0, y: 216 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764497030,
        from: { x: 0, y: -216 },
        to: { x: 187.06148721743872, y: 108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764498854,
        from: { x: 187.06148721743872, y: -108 },
        to: { x: -187.06148721743872, y: -108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764500878,
        from: { x: 187.06148721743872, y: -108 },
        to: { x: -187.06148721743872, y: 108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764502654,
        from: { x: 187.06148721743872, y: -108 },
        to: { x: 0, y: 216 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764506998,
        from: { x: 187.06148721743872, y: 108 },
        to: { x: -187.06148721743872, y: 108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764508582,
        from: { x: -187.06148721743872, y: -108 },
        to: { x: 187.06148721743872, y: 108 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600764511262,
        from: { x: -187.06148721743872, y: -108 },
        to: { x: 0, y: 216 },
        width: 2,
      },
    ],
  },
  {
    title: 'Complete Bipartite Graph(K3,2)',
    edges: [
      {
        color: 'black',
        edgeId: 1600766323705,
        from: { x: -93.53074360871936, y: -54 },
        to: { x: 93.53074360871936, y: -18 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600766324745,
        from: { x: 93.53074360871936, y: -18 },
        to: { x: -93.53074360871936, y: 18 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600766326601,
        from: { x: 93.53074360871936, y: 54 },
        to: { x: 93.53074360871936, y: 54 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600766328050,
        from: { x: -93.53074360871936, y: 18 },
        to: { x: -93.53074360871936, y: 18 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600766332641,
        from: { x: -93.53074360871936, y: 18 },
        to: { x: 93.53074360871936, y: 54 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600766333833,
        from: { x: 93.53074360871936, y: 54 },
        to: { x: -93.53074360871936, y: 90 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600766334985,
        from: { x: -93.53074360871936, y: 90 },
        to: { x: 93.53074360871936, y: -18 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600766336457,
        from: { x: -93.53074360871936, y: -54 },
        to: { x: 93.53074360871936, y: 54 },
        width: 2,
      },
    ],
    nodes: [
      {
        fill: 'red',
        label: '',
        labelPosition: 'left',
        nodeId: 1600766317057,
        r: 5,
        stroke: 'black',
        strokeWidth: 0,
        type: 'CIRCLE',
        x: -93.53074360871936,
        y: -54,
      },
      {
        fill: 'red',
        label: '',
        labelPosition: 'left',
        nodeId: 1600766317457,
        r: 5,
        stroke: 'black',
        strokeWidth: 0,
        type: 'CIRCLE',
        x: -93.53074360871936,
        y: 18,
      },
      {
        fill: 'red',
        label: '',
        labelPosition: 'left',
        nodeId: 1600766318161,
        r: 5,
        stroke: 'black',
        strokeWidth: 0,
        type: 'CIRCLE',
        x: -93.53074360871936,
        y: 90,
      },
      {
        fill: 'blue',
        label: '',
        labelPosition: 'left',
        nodeId: 1600766319713,
        r: 5,
        stroke: 'black',
        strokeWidth: 0,
        type: 'CIRCLE',
        x: 93.53074360871936,
        y: -18,
      },
      {
        fill: 'blue',
        label: '',
        labelPosition: 'left',
        nodeId: 1600766320401,
        r: 5,
        stroke: 'black',
        strokeWidth: 0,
        type: 'CIRCLE',
        x: 93.53074360871936,
        y: 54,
      },
      {
        fill: 'black',
        label: 'K_{3,2}',
        labelPosition: 'below',
        nodeId: 1600766342009,
        r: 0,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: 0,
        y: -108,
      },
    ],
  },
  {
    title: 'Binary Heap',
    edges: [
      {
        color: 'black',
        edgeId: 1600767421422,
        from: { x: 0, y: -180 },
        to: { x: -93.53074360871936, y: -90 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767422550,
        from: { x: -93.53074360871936, y: -90 },
        to: { x: -187.06148721743872, y: 0 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767423334,
        from: { x: -187.06148721743872, y: 0 },
        to: { x: -218.23840175367852, y: 54 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767424294,
        from: { x: -187.06148721743872, y: 0 },
        to: { x: -155.88457268119893, y: 54 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767425214,
        from: { x: -62.35382907247958, y: 0 },
        to: { x: -93.53074360871936, y: 54 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767426038,
        from: { x: -62.35382907247958, y: 0 },
        to: { x: -31.17691453623979, y: 54 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767426997,
        from: { x: -62.35382907247958, y: 0 },
        to: { x: -93.53074360871936, y: -90 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767428054,
        from: { x: 0, y: -180 },
        to: { x: 93.53074360871936, y: -90 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767429525,
        from: { x: 93.53074360871936, y: -90 },
        to: { x: 62.35382907247958, y: 0 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767430686,
        from: { x: 62.35382907247958, y: 0 },
        to: { x: 62.35382907247958, y: 0 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767431710,
        from: { x: 93.53074360871936, y: 54 },
        to: { x: 62.35382907247958, y: 0 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767432998,
        from: { x: 62.35382907247958, y: 0 },
        to: { x: 31.17691453623979, y: 54 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767434094,
        from: { x: 93.53074360871936, y: -90 },
        to: { x: 187.06148721743872, y: 0 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767434854,
        from: { x: 187.06148721743872, y: 0 },
        to: { x: 155.88457268119893, y: 54 },
        width: 2,
      },
      {
        color: 'black',
        edgeId: 1600767435846,
        from: { x: 187.06148721743872, y: 0 },
        to: { x: 218.23840175367852, y: 54 },
        width: 2,
      },
    ],
    nodes: [
      {
        fill: 'white',
        label: '100',
        labelPosition: 'above',
        nodeId: 1600767338526,
        r: 6,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: 0,
        y: -180,
      },
      {
        fill: 'white',
        label: '76',
        labelPosition: 'right',
        nodeId: 1600767341870,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: -93.53074360871936,
        y: -90,
      },
      {
        fill: 'white',
        label: '68',
        labelPosition: 'left',
        nodeId: 1600767343070,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: 93.53074360871936,
        y: -90,
      },
      {
        fill: 'white',
        label: '63',
        labelPosition: 'left',
        nodeId: 1600767363934,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: 62.35382907247958,
        y: 0,
      },
      {
        fill: 'white',
        label: '52',
        labelPosition: 'right',
        nodeId: 1600767409750,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: -62.35382907247958,
        y: 0,
      },
      {
        fill: 'white',
        label: '45',
        labelPosition: 'right',
        nodeId: 1600767410478,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: -187.06148721743872,
        y: 0,
      },
      {
        fill: 'white',
        label: '24',
        labelPosition: 'left',
        nodeId: 1600767412062,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'CIRCLE',
        x: 187.06148721743872,
        y: 0,
      },
      {
        fill: 'black',
        label: '32',
        labelPosition: 'below',
        nodeId: 1600767414310,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'RECT',
        x: -218.23840175367852,
        y: 54,
      },
      {
        fill: 'black',
        label: '13',
        labelPosition: 'below',
        nodeId: 1600767414878,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'RECT',
        x: -155.88457268119893,
        y: 54,
      },
      {
        fill: 'black',
        label: '18',
        labelPosition: 'below',
        nodeId: 1600767415366,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'RECT',
        x: -93.53074360871936,
        y: 54,
      },
      {
        fill: 'black',
        label: '26',
        labelPosition: 'below',
        nodeId: 1600767415806,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'RECT',
        x: -31.17691453623979,
        y: 54,
      },
      {
        fill: 'black',
        label: '36',
        labelPosition: 'below',
        nodeId: 1600767416518,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'RECT',
        x: 31.17691453623979,
        y: 54,
      },
      {
        fill: 'black',
        label: '21',
        labelPosition: 'below',
        nodeId: 1600767417159,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'RECT',
        x: 93.53074360871936,
        y: 54,
      },
      {
        fill: 'black',
        label: '16',
        labelPosition: 'below',
        nodeId: 1600767417654,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'RECT',
        x: 155.88457268119893,
        y: 54,
      },
      {
        fill: 'black',
        label: '6',
        labelPosition: 'below',
        nodeId: 1600767418358,
        r: 5,
        stroke: 'black',
        strokeWidth: 1,
        type: 'RECT',
        x: 218.23840175367852,
        y: 54,
      },
    ],
  },
]

// ____________________
//
const Templates: React.FC = () => {
  const [templates, setTemplates] = useRecoilState(templatesState)
  const { setEdges } = useEdge()
  const { setNodes } = useNode()

  const updateTemp = (edges: Edge[], nodes: Node[]) => {
    setEdges(edges)
    setNodes(nodes)
    setTemplates(false)
  }

  return (
    <>
      <Modal handleClose={() => setTemplates(false)} isDisplay={templates}>
        <H1>Select a template below.</H1>
        <List>
          {templateData.map((d, i) => (
            <button key={i} onClick={() => updateTemp(d.edges, d.nodes)}>
              {d.title}
            </button>
          ))}
        </List>
      </Modal>
    </>
  )
}

// ____________________
//
const H1 = styled.h1`
  margin: 0px;
  color: ${(p) => p.theme.primary};
  font-size: 1.5em;
`

const List = styled.div`
  button {
    margin: 0.2em;
  }
`

// ____________________
//
export default Templates
