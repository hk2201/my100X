import { memo, useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  const inputFunction = useCallback (() => {
    console.log("child clicked")
  },[])

  return <div>
    <Child inputFunction={inputFunction} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({inputFunction}) => {
	console.log("child render")

	return <div>
		<button onClick={inputFunction}>Button Clicked</button>
	</div>
})


export default App;