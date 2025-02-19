import React, { useState } from "react";

function CreateArea(props) {
    const [list, setList] = useState({
        num: "",
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
        props.onAdd(list);
        setList({
            num: "",
            item: "",
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input
                    name="item"
                    onChange={handleChange}
                    value={list.item}
                    placeholder="What item?"
                    rows="1"
                />
                <input
                    name="num"
                    onChange={handleChange}
                    value={list.num}
                    placeholder="How many?"
                />

                <button onClick={submitList}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
