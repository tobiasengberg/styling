import React, {useState} from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';
import {DndContext} from "@dnd-kit/core";



const FirstDnd = () => {

    const [isDropped, setIsDropped] = useState(false);

    const handleDragEnd = (event) => {
        if(event.over && event.over.id === "droppable") {
            setIsDropped(true);
        }
    }

    const draggableMarkup = (<Draggable>This will be moved</Draggable>);
    return (
        <DndContext onDragEnd={handleDragEnd}>
            { isDropped ? null : draggableMarkup}
            <Droppable>
                {isDropped ? draggableMarkup : 'Drop here'}
            </Droppable>

        </DndContext>
    );
};

export default FirstDnd;