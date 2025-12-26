import React from 'react';
import {useDraggable} from "@dnd-kit/core";

const Draggable = (props) => {
    const {setNodeRef, listeners, transform, attributes } = useDraggable({id: "draggable"});
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} {...listeners} {...attributes} style={style} className="bg-yellow-400">
            {props.children}
        </div>
    );
};

export default Draggable;