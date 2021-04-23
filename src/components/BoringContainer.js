import { useState } from "react";
import { getTask } from "../lib/fetch";
import Button from "./Button";

export default function BoringContainer(){
const [boringTask, setBoringTask]= useState('')
    const handleClick = () => {
        setBoringTask ('thinking........') 
        getTask()
        .then(response =>{
            setBoringTask (response.activity)
        })
    }

    return (
        <div>
            <h1>boringContainer</h1>
            <Button onClick = {handleClick} text = "i am bored"/>
            <p>{boringTask}</p>
        </div>
    )
}
