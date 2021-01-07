import React from "react";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import AddButton from "./AddButton";
import Title from "./Title";

function Header() {

    return (
    <header>
      <div>
        <h1>
          <div className="left">
            <NoteAddIcon />Keeper
          </div>
          <Title />
        </h1>
      </div>
    </header>
  );
}

export default Header;
