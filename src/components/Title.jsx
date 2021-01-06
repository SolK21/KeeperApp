import React, {useState} from "react"

function Title(props){
    const date = new Date();
    let today = date.toLocaleDateString();

    const [newList, setList] = useState(today);

    return(
        <text>
            {newList}
        </text>
    )
}

export default Title;