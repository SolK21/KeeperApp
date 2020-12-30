import React from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AddButton from "./AddButton";

function Header() {
  const date = new Date();
  let today = date.toLocaleDateString();
  

  return (
    <header>
      <div>
        <h1>
          <div className="left">
            <NoteAddIcon />Keeper
          </div>
          
          {today}
          <AddButton />
        </h1>
      </div>
    </header>
  );
}

export default Header;
