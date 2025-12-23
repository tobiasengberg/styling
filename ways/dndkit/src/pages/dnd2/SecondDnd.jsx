import React, {useState} from 'react';
import Draggable from "./Draggable.jsx";
import Droppable from "./Droppable.jsx";
import {DndContext} from "@dnd-kit/core";
import trash from '../../assets/trash.svg';

const SecondDnd = () => {

    const [isDropped, setIsDropped] = useState(false);
    const handleDragEnd = (event) => {
        if(event.over && event.over.id === "droppable") {
            setIsDropped(true);
        }
    }

    const draggableMarkup = (<Draggable>This will be moved</Draggable>);

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <Draggable>
                { isDropped ? null : draggableMarkup }
            </Draggable>
            <Droppable>
                <img src={trash} alt="trash" />
            </Droppable>
        </DndContext>
    );
};

export default SecondDnd;