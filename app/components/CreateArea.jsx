import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

function CreateArea(props) {
    const [list, setList] = useState({
        num: "1",
        item: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setList((prevList) => {
            return {
                ...prevList,
                [name]: value,
            };
        });
    }

    function submitList(event) {
        console.log(list);
        props.onAdd(list);
        setList({
            num: "",
            item: "",
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="inputNote">
                <input
                    name="item"
                    onChange={handleChange}
                    value={list.item}
                    placeholder="What item?"
                    rows="1"
                />

                <Fab onClick={submitList}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
}

export default CreateArea;
