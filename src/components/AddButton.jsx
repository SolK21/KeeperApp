import React, {useState} from "react";

function AddButton(props){
    const [value, setValue] = useState("");

    function handleChange(event){
        setValue(event.target.value);
    }

    function handleSubmit(e){
        props.addTitle(value);

        setValue("");

        e.preventDefault();
    }

    return(
        <div class="list-btn">
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={handleChange}
                    type="text" 
                    placeholder="Add New List" 
                    name="list"
                    value={value}  
                />
            </form>
        </div>

        
    );  
};

export default AddButton;