import React from 'react'

import Layout from '../Layout'
import Main from '../Main'
import SideBar from '../SideBar'
import EditModeSelector from '../EditModeSelector'

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
    </>
  )
}

// ____________________
//
export default App
