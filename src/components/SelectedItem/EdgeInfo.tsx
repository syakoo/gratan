import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'

import { Edge } from '../../store/atoms'
import { useEdge } from '../../logic/hooks'
import ColorSelector from './ColorSelector'

// ____________________
//
const EdgeInfo: React.FC<{ edge: Edge }> = ({ edge }) => {
  const { deleteEdge, updateEdge } = useEdge()

  return (
    <div>
      <div className="head">
        <span className="title">Edge</span>
        <DeleteIcon
          onClick={() => {
            deleteEdge(edge.edgeId)
          }}
        />
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
            <td>
              <input
                type="number"
                min={1}
                max={5}
                value={edge.width}
                onChange={(e) =>
                  updateEdge(edge.edgeId, { width: +e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <th>color</th>
            <td>
              <ColorSelector
                value={edge.color}
                onChange={(v) => updateEdge(edge.edgeId, { color: v })}
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
export default EdgeInfo
