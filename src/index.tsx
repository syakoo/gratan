import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { RecoilRoot } from 'recoil'

import { theme, GlobalStyle } from './style'
import SampleApp from './SampleApp'

// ____________________
//
const App: React.FC = () => <SampleApp />

const Container: React.FC = () => (
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle {...theme} />
      <App />
    </ThemeProvider>
  </RecoilRoot>
)

ReactDOM.render(<Container />, document.getElementById('app'))
