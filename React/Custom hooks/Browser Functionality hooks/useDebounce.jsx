import React, { useState } from 'react';

function useDebounce(value, timeout) {
    const [debouncedvalue, setDebouncedvalue] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setDebouncedvalue(value);
        }, timeout)

        return () => {
            clearTimeout(id);
        }
    }, [value])


    return debouncedvalue
}


function App() {
    const [inputValue, setInputValue] = useState("");

    const debounceValue = useDebounce(inputValue, 500);

    return (
        <>
            <input
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Search'
            />
        </>
    )
}