import React, {useState} from 'react';
import {DndContext} from "@dnd-kit/core";
import Draggable from "./Draggable.jsx";
import Droppable from "./Droppable.jsx";

const FourthDnd = () => {
    const [isDropped, setIsDropped] = useState(false);
    const handleDragEnd = (event) => {
        if(event.over && event.over.id === "droppable") {
            setIsDropped(true);
        }
    }
    const draggableMarkup = (<Draggable>This will be moved</Draggable>);
    return (
        <DndContext onDragEnd={handleDragEnd}>
            {isDropped ? null : draggableMarkup}
            <Droppable>
                {isDropped ? draggableMarkup : "Drop here"}
            </Droppable>
        </DndContext>
    );
};

export default FourthDnd;