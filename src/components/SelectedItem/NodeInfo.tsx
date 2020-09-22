import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import { Node } from '../../store/atoms'
import { useNode } from '../../logic/hooks'
import ColorSelector from './ColorSelector'

// ____________________
//
const NodeInfo: React.FC<{ node: Node }> = ({ node }) => {
  const { deleteNode, updateNode } = useNode()

  return (
    <div>
      <div className="head">
        <span className="title">Node</span>
        <DeleteIcon
          onClick={() => {
            deleteNode(node.nodeId)
          }}
        />
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
            <td>
              <input
                type="number"
                min={1}
                max={10}
                value={node.r}
                onChange={(e) =>
                  updateNode(node.nodeId, { r: +e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <th>fill</th>
            <td>
              <ColorSelector
                value={node.fill}
                onChange={(v) => updateNode(node.nodeId, { fill: v })}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// ____________________
//
export default NodeInfo
