import Button from "../base/Button/Button"
import { TABS } from "../../constants/tabs"

export default function TabSection({currentTab, onTabSelected}) {
    return (
        <section style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            padding: '16px 0'
        }} >
            <Button 
                isActive={currentTab == TABS.INFO} 
                onClick={() => onTabSelected(TABS.INFO)}>Info
            </Button>
            <Button 
                isActive={currentTab == TABS.EMPTY} 
                onClick={() => onTabSelected(TABS.EMPTY)}>Empty
            </Button>
            <Button 
                isActive={currentTab == TABS.LOAD_TEST} 
                onClick={() => onTabSelected(TABS.LOAD_TEST)}>Load Test
            </Button>
        </section>
    )
}
