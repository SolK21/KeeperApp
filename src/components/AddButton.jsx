import React, {useState} from "react";

function AddButton(props){
    return(
        <div class="list-btn">
            <input 
                onChange={props.onChange} 
                type="text" 
                placeholder="Add New List" 
                name="list" 
                // value={props.value}  
                />
        </div>

        
    );  
};

export default AddButton;