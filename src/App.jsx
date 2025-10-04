import Header from './components/Header'
import InfoSection from './components/InfoSection/InfoSection'
import TabSection from './components/TabSection/TabSection'

import { Fragment, useState } from 'react'
import { TABS } from './constants/tabs'

import './App.css'
import LoadTestSection from './components/LoadTestSection/LoadTestSection'

export default function App() {
  const [tab, setTab] = useState(TABS.INFO)
  return (
    <Fragment>
      <Header></Header>
      <main>
        <h1>Test React Main Body</h1>
        <TabSection currentTab ={tab} onTabSelected={setTab}></TabSection>

        {tab == TABS.INFO && <InfoSection></InfoSection>}
        {tab == TABS.LOAD_TEST && <LoadTestSection></LoadTestSection>}
      </main>
    </Fragment>
  )
}
