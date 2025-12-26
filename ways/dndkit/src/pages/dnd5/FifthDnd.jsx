import React from 'react';
import {DndContext} from "@dnd-kit/core";
import Draggable from "./Draggable.jsx";
import Droppable from "./Droppable.jsx";

const FifthDnd = () => {
    const [isDropped, setIsDropped] = React.useState(false);
    const handleDragEnd = (event) => {
        if(event.over && event.over.id === "droppable") {
            setIsDropped(true);
        }
    }
    const draggableMarkup = (<Draggable>Drag this text</Draggable>);
    return (
        <DndContext onDragEnd={handleDragEnd}>
            { isDropped ? null : draggableMarkup }
            <Droppable>
                {isDropped ? draggableMarkup : "Drop it here"}
            </Droppable>
        </DndContext>
    );
};

export default FifthDnd;