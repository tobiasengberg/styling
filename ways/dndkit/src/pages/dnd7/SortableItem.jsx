import React from 'react';
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";

const SortableItem = (props) => {
    const {setNodeRef, transform, transition, attributes, listeners} = useSortable({id: props.id});
    const style = {
        transform: CSS.Transform.toString(transform),transition
    }
    return (
        <div className="m-5 p-8 bg-slate-100 text-xl" ref={setNodeRef} {...attributes} {...listeners} style={style}>
            {props.id}
        </div>
    );
};

export default SortableItem;