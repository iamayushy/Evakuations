import React, { useState } from "react";
import { List } from "./List";

const Wishlist = () => {

    const [task, setTask]  = useState("");
    const [add, setAdd] = useState([]);

    const handleTask = (event) => {
        setTask(event.target.value)
        console.log(task)
    }
    const addTask = () => {
        const payload = {
            title: task
        }
        const newList = [...add, payload];
        setAdd(newList)
    }


    return (
        <>
           
           
            {add.length < 3 ? 
            <input type="text" value={task} onChange = {handleTask}/> : ""}

            {add.length < 3 ?
            <button onClick={addTask}>ADD</button> : <h1>You cannot add more than 3 items to wishlist</h1>}
             
            
            
            <div>
                {add.map(( work) => {
                    return(
                        <List  title={work.title}/>
                    )
                })}
            </div>
        </>
    )
}

export {Wishlist}