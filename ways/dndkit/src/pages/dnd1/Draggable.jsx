import React from 'react';
import {useDraggable} from "@dnd-kit/core";

const Draggable = (props) => {
    const {attributes, setNodeRef, listeners, transform} = useDraggable({id: "draggable"});

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div className="m-10" ref={setNodeRef} {...attributes} {...listeners} style={style}>
            {props.children}
        </div>
    );
};

export default Draggable;