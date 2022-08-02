import { useState } from "react"

export const useCounter = (initv = 1 ) =>{

    const [counter, setCounter] = useState(initv)

    const increment =  (value = 1 ) =>{
        setCounter(counter + value);
    }
    const decrement = (value = 1) =>{
        if (counter > 0)
        setCounter(counter - value);
    }
    const reset = () =>{
        setCounter(initv);
    }

    return{
        counter,
        increment,
        decrement,
        reset,
    }
}