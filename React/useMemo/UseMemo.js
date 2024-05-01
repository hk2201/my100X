import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [sum, setSum] = useState(0)

    // Below will only run when the input is changed so that we avoid expensive operations

    let ansss = useMemo(() => {
        var ans = 0
        for (let i = 0; i <= sum; i++) {
            ans += i
        }

        return ans
    }, [sum]);


    return (
        <>
            <input
                type="text"
                placeholder="Sum"
                onChange={(e) => {
                    var num = e.target.value

                    setSum(num)
                }}
            ></input>
            <div>{ansss}</div>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                Counter {count}
            </button>
        </>
    )
}

export default App
