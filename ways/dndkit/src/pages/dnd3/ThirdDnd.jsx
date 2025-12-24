import React, {useState} from 'react';
import {DndContext} from "@dnd-kit/core";
import Draggable from "./Draggable.jsx";
import Droppable from "./Droppable.jsx";

const ThirdDnd = () => {
    const [isDropped, setIsDropped] = useState(false);
    const draggableMarkup = (<Draggable>This will be moved</Draggable>);
    const handleDragEnd = (event) => {
        if(event.over && event.over.id === "droppable") {
            setIsDropped(true);
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            { isDropped ? null : draggableMarkup}
            <Droppable>
                { isDropped ? draggableMarkup : "Drop here really"}
            </Droppable>
        </DndContext>
    );
};

export default ThirdDnd;