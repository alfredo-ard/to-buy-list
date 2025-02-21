import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

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
            <h1>{props.item}</h1>

            <div>
                <button onClick={handleMinNum}>
                    <RemoveIcon />
                </button>
                <p>{props.num}</p>
                <button onClick={handleAddNum}>
                    <AddIcon />
                </button>
            </div>

            <button onClick={handleClick}>
                <DeleteIcon />
            </button>
        </div>
    );
}

export default Note;
