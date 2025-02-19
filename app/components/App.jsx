import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";
import CreateArea from "./CreateArea";

function App() {
    const [list, setLists] = useState([]);

    function addList(newLists) {
        setLists((prevLists) => {
            return [...prevLists, newLists];
        });
    }

    function deleteNote(id) {
        setLists((prevLists) => {
            return prevLists.filter((listItem, index) => {
                return index !== id;
            });
        });
    }

    function addNum(id) {
        setLists((prevLists) =>
            prevLists.map((item, index) =>
                index === id ? { ...item, num: Number(item.num) + 1 } : item
            )
        );
    }

    function minNum(id) {
        setLists((prevLists) =>
            prevLists.map((item, index) =>
                index === id ? { ...item, num: Number(item.num) - 1 } : item
            )
        );
    }

    const totalCount = list.reduce((sum, item) => sum + Number(item.num), 0);

    console.log("ini" + totalCount);
    return (
        <div>
            <Header />
            <CreateArea onAdd={addList} />
            {list.map((listItem, index) => {
                return (
                    <List
                        key={index}
                        id={index}
                        title={listItem.num}
                        content={listItem.item}
                        onDelete={deleteNote}
                        onAdd={addNum}
                        onMin={minNum}
                    />
                );
            })}
            <Footer total={totalCount} />
        </div>
    );
}

export default App;
