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
        <div className="list">
            <h1>{props.content}</h1>
            <p>{props.title}</p>
            <button onClick={handleClick}>DEL</button>
            <button onClick={handleMinNum}>MIN</button>
            <button onClick={handleAddNum}>ADD</button>
        </div>
    );
}

export default Note;
