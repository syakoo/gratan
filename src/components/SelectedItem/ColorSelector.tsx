import React from 'react'
import styled from 'styled-components'

// ____________________
//
type ColorSelector = {
  value: string
  onChange: (v: string) => void
}

// ____________________
//
const ColorSelector: React.FC<ColorSelector> = ({ value, onChange }) => {
  return (
    <Select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="red">red</option>
      <option value="green">green</option>
      <option value="blue">blue</option>
      <option value="cyan">cyan</option>
      <option value="magenta">magenta</option>
      <option value="yellow">yellow</option>
      <option value="black">black</option>
      <option value="gray">gray</option>
      <option value="white">white</option>
      <option value="darkgray">darkgray</option>
      <option value="lightgray">lightgray</option>
      <option value="brown">brown</option>
      <option value="lime">lime</option>
      <option value="olive">olive</option>
      <option value="orange">orange</option>
      <option value="pink">pink</option>
      <option value="purple">purple</option>
      <option value="teal">teal</option>
      <option value="violet">violet</option>
    </Select>
  )
}

// ____________________
//
const Select = styled.select`
  border-radius: 2px;
  background-color: ${(p) => p.theme.gray};
`

// ____________________
//
export default ColorSelector
