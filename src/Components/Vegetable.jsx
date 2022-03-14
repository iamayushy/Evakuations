import React, { useState } from "react";
import {Button} from "./Add"


const Vegetable = () => {
  
return (
        <div>
            <h1>🍅 Tomatoes</h1>
            <Button value = {10}/>
            
            <h1>🥔 Potatoes</h1>
            <Button value = {8}/>
            
            <h3>🧅 Onions</h3>
            <Button value = {7}/>
            
        </div>
    )
}

export {Vegetable}