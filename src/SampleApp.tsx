import React from 'react'
import { atom, useRecoilState } from 'recoil'
import styled from 'styled-components'

// ____________________
//
const textState = atom({
  key: 'textState',
  default: '',
})

// ____________________
//
const SampleApp: React.FC<{ className?: string }> = ({ className }) => {
  const [text, setText] = useRecoilState(textState)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div className={className}>
      <h1>Sample App</h1>
      <div>
        <input type="text" value={text} onChange={onChange} />
      </div>
      <div>
        <span>Echo: {text}</span>
      </div>
    </div>
  )
}

// ____________________
//
const Container = styled(SampleApp)`
  text-align: center;
  h1 {
    color: ${(p) => p.theme.primary};
  }
`

export default Container
