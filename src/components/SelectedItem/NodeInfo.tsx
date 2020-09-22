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
            <th>type</th>
            <td>
              <select
                value={node.type}
                onChange={(e) =>
                  updateNode(node.nodeId, {
                    type: e.target.value as Node['type'],
                  })
                }
              >
                <option value="CIRCLE">Circle</option>
                <option value="RECT">Rect</option>
              </select>
            </td>
          </tr>
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
                min={0}
                max={15}
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
          <tr>
            <th style={{ textAlign: 'left' }}>stroke</th>
            <td>-----------------</td>
          </tr>
          <tr>
            <th>color</th>
            <td>
              <ColorSelector
                value={node.stroke}
                onChange={(v) => updateNode(node.nodeId, { stroke: v })}
              />
            </td>
          </tr>
          <tr>
            <th>width</th>
            <td>
              <input
                type="number"
                min={0}
                max={5}
                value={node.strokeWidth}
                onChange={(e) =>
                  updateNode(node.nodeId, { strokeWidth: +e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <th style={{ textAlign: 'left' }}>label</th>
            <td>-----------------</td>
          </tr>
          <tr>
            <th>text</th>
            <td>
              <input
                value={node.label}
                onChange={(e) =>
                  updateNode(node.nodeId, {
                    label: e.target.value,
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <th>position</th>
            <td>
              <select
                value={node.labelPosition}
                onChange={(e) =>
                  updateNode(node.nodeId, {
                    labelPosition: e.target.value as Node['labelPosition'],
                  })
                }
              >
                <option value="Left">Left</option>
                <option value="Right">Right</option>
                <option value="Top">Top</option>
                <option value="Bottom">Bottom</option>
                <option value="TopLeft">Top Left</option>
                <option value="TopRight">Top Right</option>
                <option value="BottomLeft">Bottom Left</option>
                <option value="BottomRight">Bottom Right</option>
              </select>
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
