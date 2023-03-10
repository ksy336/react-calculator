import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styles from './app.module.scss';
import React, { useState } from 'react';

export function App() {
  const [blocks, setBlocks] = useState([
    {name: "World1"},
    {name: "World2"},
    {name: "World3"},
    {name: "World4"},
  ]);

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const items = Array.from(blocks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setBlocks(items)
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd} >
        <div className={styles.flex_container}>
         <div className={styles.flex_first}>
           <Droppable droppableId="blocks">
             {(provided) => (
               <div
                 className={styles.blocks_container}
                 {...provided.droppableProps}
                 ref={provided.innerRef}
               >
                 {blocks.map((block, index: number) => (
                   <Draggable
                     key={block.name}
                     draggableId={block.name}
                     index={index}
                   >
                     {(provided) => (
                       <div
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                         ref={provided.innerRef}
                       >
                         <div className={styles.block_draggable}>
                           {block.name}
                         </div>
                       </div>
                     )}
                   </Draggable>
                 ))}
                 {provided.placeholder}
               </div>
             )}
           </Droppable>
         </div>
          <div className={styles.flex_second}>
          <Droppable droppableId="blocks">
            {(provided) => (
              <div
                className={styles.blocks_container}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                        <div className={styles.block_result}>
                         Перетащите сюда
                        </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          </div>
        </div>
      </DragDropContext>
    </>
  );
}

export default App;
