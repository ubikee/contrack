import React from 'react';
import { Site, Page } from 'ywana-core7'
import { AppContextProvider } from './AppContext'
import Contracts from './pages/contracts/page'
import Reports from './pages/reports/page'
import Login from './pages/login/page'

/**
 * AppSite
 */
const AppSite = () => {

  const init = 'LOGIN'

  return (
    <Site title={`CONTRACK ${process.env.REACT_APP_VERSION}`} init={init} min lang='es' dictionary={[]}>

        <Page id="CONTRACTS" section="B2B" icon="description" title="Contracts" layout="workspace">
          <Contracts />
        </Page>     

        <Page id="REPORTS" section="B2B" icon="pie_chart" title="Reports" layout="workspace">
          <Reports />
        </Page>   

        <Page id="LOGIN" section="APP" icon="meeting_room" title="Exit" layout="explorer">
          <Login />
        </Page>

    </Site>
  )
}

/**
 * App
 */
const App = (props) => {
  return (
    <AppContextProvider>
      <AppSite />
    </AppContextProvider>
  )
}

export default App;
