import React from 'react';
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

const SortableItem = (props) => {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: props.id});

    const style = {
        transform: CSS.Transform.toString(transform),transition
    }
    return (
        <div className="w-20 px-10 py-5 bg-amber-800 text-2xl text-white m-3 " ref={setNodeRef} {...listeners} {...attributes} style={style}>
            {props.id}
        </div>
    );
};

export default SortableItem;