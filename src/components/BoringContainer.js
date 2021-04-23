import { useState } from "react";
import { getTask } from "../lib/fetch";
import Button from "./Button";

export default function BoringContainer({addTask}){
const [boringTask, setBoringTask]= useState('')
    const handleClick = () => {
        setBoringTask ('thinking........') 
        getTask()
        .then(response =>{
            setBoringTask (response.activity)
        })
    }
    const handleAdd = () => {
        addTask (boringTask)
        setBoringTask ('')
    }

    return (
        <div>
            <Button color = 'purple' onClick = {handleClick} text = "i am bored"/>
           <p>{boringTask}<span className = 'heart' onClick = {handleAdd}>{boringTask &&'💚'}</span></p>
        </div>
    )
}
