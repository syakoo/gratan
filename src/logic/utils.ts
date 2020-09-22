import { Edge, Node } from '../store/atoms'

export const getId = (): number => {
  const now = new Date()
  return now.getTime()
}

export const graph2Tikz = (edges: Edge[], nodes: Node[]) => {
  const scaleY = (y: number) => {
    return (700 - y) / 70
  }
  const scaleX = (x: number) => x / 70

  const code = `
\\begin{tikzpicture}
  ${edges
    .filter((e) => e.width)
    .map(
      (e) =>
        `\\path[draw=${e.color}] (${scaleX(e.from.x)}, ${scaleY(
          e.from.y
        )}) -- (${scaleX(e.to.x)}, ${scaleY(e.to.y)});`
    )
    .join('\n  ')}
  ${nodes
    .map(
      (n) =>
        `\\node () [${n.r ? `fill=${n.fill}` : ''},label=${n.labelPosition}:$${
          n.label
        }$, ${n.strokeWidth && n.r ? `draw=${n.stroke}` : ''}, ${
          n.type === 'RECT' ? 'rectangle' : 'circle'
        }] at (${scaleX(n.x)}, ${scaleY(n.y)}) {};`
    )
    .join('\n  ')}
\\end{tikzpicture}
  `
  console.log({ code })
  return code
}
