import { useEffect, useState } from 'react'
import logo from '/vite.svg'
import helpIcon from '/help.svg'
import Modal from './base/Modal/Modal'
import Button from './base/Button/Button'

export default function Header() {
    const [time, setTime] = useState(new Date())
    const [isHelpOpen, setIsHelpOpen] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)

        return () => {
            clearInterval(interval);
        }
    }, [])

    function toggleHelp()
    {
        setIsHelpOpen(!isHelpOpen)
    }
    
    return (
        <header className="header">
            <img src={logo} alt="" />
            <span>Current time: {time.toLocaleTimeString()}</span>
            <img src={helpIcon} onClick = {toggleHelp} style={{cursor : 'pointer'}} alt="" />
            
            <Modal style={{ justifyItems: 'center' }}  
                show={isHelpOpen}>
                <h2>Help</h2>
                <p>
                    This website is designed as an educational platform for learning and practicing React.js, providing a hands-on environment to build, experiment, and master modern web development skills through practical application and real-world examples.
                </p>
                <Button onClick = {toggleHelp}>Close</Button>
            </Modal>
        </header>

    )
}
