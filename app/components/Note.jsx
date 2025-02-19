import React from "react";

function Note(props) {
    function handleClick() {
        props.onDelete(props.id);
    }
    function handleAddNum() {
        props.onAdd(props.id);
    }
    function handleMinNum() {
        props.onMin(props.id);
    }

    return (
        <div className="note">
            <h1>{props.content}</h1>
            <p>{props.title}</p>
            <button onClick={handleClick}>DELETE</button>
            <button onClick={handleAddNum}>ADD</button>
            <button onClick={handleMinNum}>MIN</button>
        </div>
    );
}

export default Note;
