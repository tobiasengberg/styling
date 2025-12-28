import React, {useState} from 'react';
import {closestCenter, DndContext, MouseSensor, TouchSensor, useSensor, useSensors} from "@dnd-kit/core";
import SortableItem from "./SortableItem.jsx";
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from "@dnd-kit/sortable";

const SeventhDnd = () => {
    const [items, setItems] = useState([1,2,3,4,5]);
    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    )

    const handleDragEnd = (event) => {
        const {active, over} = event;
        if (active.id !== over.id) {
            setItems((i) => {
                const oldIndex = i.indexOf(active.id);
                const newIndex = i.indexOf(over.id);
                return arrayMove(i, oldIndex, newIndex);
            })
        }
    }
    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {items.map((item) => (
                    <SortableItem key={item} id={item} />
                ))}
            </SortableContext>
        </DndContext>
    );
};

export default SeventhDnd;