import React from 'react';
import {useDroppable} from "@dnd-kit/core";

const Droppable = (props) => {
    const {isOver, setNodeRef} = useDroppable({id: "droppable"});
    const style = isOver ? "border-2 border-blue-500" : "";
    return (
        <div ref={setNodeRef} className={style + "bg-slate-200 p-8"}>
            {props.children}
        </div>
    );
};

export default Droppable;