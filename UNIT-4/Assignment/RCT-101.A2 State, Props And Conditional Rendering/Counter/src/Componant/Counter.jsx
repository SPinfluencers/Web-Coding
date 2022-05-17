import React from "react";
import style from "./Counter.css"

function Counter() {

    const [counter , setCounter] = React.useState(1)

    const handleIncreament = (value) => {
        setCounter(counter + value)
    }

    return(
        <>
            <p>Counter</p>
            <h1 style={{color: counter%2 == 0 ? "red":"green"}}> {counter} </h1>
            <button onClick={() =>  handleIncreament(1)}>Increament</button>
            <button onClick={() =>  handleIncreament(-1)}>Decreament</button><br />
            <button className="button1" onClick={() =>  handleIncreament(2)}>Double</button>
        </>
    )
}

export default Counter