import React from 'react'

import Layout from '../Layout'
import Main from '../Main'
import SideBar from '../SideBar'
import EditModeSelector from '../EditModeSelector'
import Output from '../Output'
import Templates from '../Templates'

// ____________________
//
const App: React.FC = () => {
  return (
    <>
      <Layout>
        <SideBar>
          <EditModeSelector />
        </SideBar>
        <Main />
      </Layout>
      <Output />
      <Templates />
    </>
  )
}

// ____________________
//
export default App
