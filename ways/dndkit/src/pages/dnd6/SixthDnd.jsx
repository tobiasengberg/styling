import React from 'react';
import {closestCenter, DndContext, KeyboardSensor, PointerSensor, useSensor, useSensors} from "@dnd-kit/core";
import {arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem.jsx";

const SixthDnd = () => {
    const [items, setItems] = React.useState([1,2,3,4,5,6,7,8,9,10]);
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
        coordinateGetter: sortableKeyboardCoordinates
        }),
    )
    const handleDragEnd = (event) => {
        const {active, over} = event;
        if (active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.indexOf(active.id);
                const newIndex = items.indexOf(over.id);
                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }

    return (
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext strategy={verticalListSortingStrategy} items={items}>
                {items.map((item) => (
                    <SortableItem key={item} id={item} />
                ))}
            </SortableContext>
        </DndContext>
    );
};

export default SixthDnd;