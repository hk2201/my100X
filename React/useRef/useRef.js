import { useEffect, useRef } from 'react'

import './App.css'

function App() {
    const divref = useRef()

    useEffect(() => {
        setTimeout(() => {
            divref.current.innerHTML = '10'
        }, 5000)
    }, [])

    const income = 5000;
    return (
        <>
            <div>
                hi there, <div ref={divref}>{income}</div>
            </div>
        </>
    )
}

export default App
