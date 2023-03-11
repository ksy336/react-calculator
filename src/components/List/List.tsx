import React from 'react';
import { Droppable, DroppableProvided, DroppableStateSnapshot } from 'react-beautiful-dnd';

type ListProps = {
  children?: React.ReactNode;
  name: string;
  onDragEnd: (data: any) => void;
}
const List = ({children, name, onDragEnd}: ListProps) => {
  return (
    <>
        <Droppable droppableId={name}>
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div ref={provided.innerRef}>
              <div>
                {children}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
    </>
  );
};

export default List;