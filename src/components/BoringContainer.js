import { useState } from "react";
import { getTask } from "../lib/fetch";
import Button from "./Button";

export default function BoringContainer({addTask, setBgColor}){
    const [counter, setCounter]= useState(0)
    const [boringTask, setBoringTask]= useState('')
    const handleClick = () => {
        setCounter(counter +1)
        console.log(counter)
        setBoringTask ('thinking........') 
        setBgColor()
        getTask()
        .then(response =>{
            setBoringTask (response.activity)
        })
    }
    const handleAdd = () => {
        addTask (boringTask)
        setBoringTask ('')
        setCounter(0)
    }


    return (
        <div className= 'textstyles'>
            <Button 
            color = 'purple' 
            onClick = {handleClick} 
            text =  {counter > 0 ? 'Still bored': 'I am bored'} />
           <p>{boringTask}<span className = 'heart' onClick = {handleAdd}>{boringTask &&'💚'}</span></p>
        </div>
    )
}
