import React from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { Canvas } from '../Canvas'
import { outputState } from '../../store/atoms'
import { useEdge, useNode } from '../../logic/hooks'
import { graph2Tikz } from '../../logic/utils'
import Modal from '../Modal'

// ____________________
//
const Output: React.FC = () => {
  const [output, setOutput] = useRecoilState(outputState)
  const { edges } = useEdge()
  const { nodes } = useNode()
  console.log({ nodes, edges })

  return (
    <>
      <Modal handleClose={() => setOutput(false)} isDisplay={output}>
        <Body>
          <svg viewBox="-350, -350, 700, 700" width="600" height="600">
            <Canvas />
          </svg>
          <div>
            <div>Tikz Code</div>
            <Pre>
              <code>{graph2Tikz(edges, nodes)}</code>
            </Pre>
          </div>
        </Body>
      </Modal>
    </>
  )
}

// ____________________
//
const Pre = styled.pre`
  padding: 0.5em;
  border: 1px solid ${(p) => p.theme.gray2};
  border-radius: 5px;
  background-color: ${(p) => p.theme.gray};
  overflow: auto;
`
const Body = styled.div`
  display: flex;
`

// ____________________
//
export default Output
