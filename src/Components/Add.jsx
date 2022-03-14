import React, { useState } from "react";

const Button = ({value}) => {
    
    const [counter, setCounter] = useState(value);
    
    const handle = (values) => {
        setCounter(counter + values);
    }
    return (
        <>
        <h2>{counter + " kg"}</h2>
        <button onClick={() => handle(1)} >Decrease</button>
        <button onClick={() => handle(-1)} >Increase</button>
        </>
    )
}

export {Button}