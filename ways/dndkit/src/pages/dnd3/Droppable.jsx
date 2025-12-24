import React from 'react';
import {useDroppable} from "@dnd-kit/core";

const Droppable = (props) => {

    const { setNodeRef, isOver} = useDroppable({id: "droppable"});

    const style = isOver ? " border-2 border-blue-500" : "";

    return (
        <div ref={setNodeRef} className={style + "bg-slate-100 text-2xl p-6"}>
            {props.children}
        </div>
    );
};

export default Droppable;