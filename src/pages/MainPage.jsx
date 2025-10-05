import { Fragment } from "react/jsx-runtime";
import Header from "../components/Header";
import InfoSection from "../components/InfoSection/InfoSection";
import LoadTestSection from "../components/LoadTestSection/LoadTestSection";
import TabSection from "../components/TabSection/TabSection";
import { TABS } from "../constants/tabs";
import { useState } from "react";

export default function MainPage() {
  const [tab, setTab] = useState(TABS.INFO);
  return (
    <Fragment>
      <Header></Header>
      <main>
        <h1>Test React Main Body</h1>

        <TabSection currentTab={tab} onTabSelected={setTab}></TabSection>

        {tab == TABS.INFO && <InfoSection></InfoSection>}
        {tab == TABS.LOAD_TEST && <LoadTestSection></LoadTestSection>}
      </main>
    </Fragment>
  );
}
