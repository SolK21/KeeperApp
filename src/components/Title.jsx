import React, {useState} from "react";
import AddButton from "./AddButton";

function Title(){
    const date = new Date();
    let today = date.toLocaleDateString();

    const [newList, setList] = useState(today);

    
    function setTitle(e){
        setTitle(e.value)
    }

    return(
        <div>
            <text>
                {newList}
            </text>
            <AddButton 
                onChange={(e) => setTitle(e)}
                value={newList == today? "": newList}
            />
        </div>

    )
}

export default Title;