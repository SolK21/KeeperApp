import React, {useState} from "react";
import AddButton from "./AddButton";

function Title(){
    const date = new Date();
    let today = date.toLocaleDateString();

    const [newList, setList] = useState("");;

    
    function addNewTitle(title){
        setList(title);
    }


    return(
        <div>
            <text>
                {newList==""? today: newList }
            </text>
            <AddButton 
                addTitle={addNewTitle}
            />
        </div>

    )
}

export default Title;