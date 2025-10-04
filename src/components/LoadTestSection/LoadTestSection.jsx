import { useEffect, useState } from "react"

export default function LoadTestSection() {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    
    async function loadJson() {
        setLoading(true)

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()

        setData(data)
        setLoading(false)
    }

    useEffect(() => {
        loadJson()
    }, [] )
    
    return (
        <section>
            <pre style={{
            backgroundColor: '#f8f9fa',
            padding: '15px',
            borderRadius: '20px',
            overflow: 'auto',
            whiteSpace: 'pre-wrap',
            textAlign: 'left',
            height: '65vh', // Фиксированная высота
            resize: 'vertical' 
            }}>
                {loading ? "Loading..." :JSON.stringify(data, null, 2)}
            </pre>
        </section>
    )
}