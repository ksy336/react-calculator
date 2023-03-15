import React, { useState } from 'react';
import { DragDropContext, Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import List from '../List/List';
import { panelsPart } from '../../utils/constants';
import styles from '../../app/app.module.scss';
import LeftBlock from '../LeftBlock/LeftBlock';
import RightBlock from '../RightBlock/RightBlock';

const DraggableComponent = () => {
  const [draggable, setDraggable] = useState(false);
  const panelItemsCopy: any = [...panelsPart];
  const [blocks, setBlocks] = useState({
    available: [
      {
      id: "left",
      name: panelItemsCopy
      }
    ],
    assigned: [
      {
      id: "right",
      name: []
      }
      ]
})
  // const [blocks, setBlocks] = useState({
  //     available: [
  //       // {name: " "   },
  //       {name: "World3"},
  //       {name: "World4"},
  //     ],
  //     assigned: [
  //       {name: ""}
  //     ]
  //   }
  // );

  const removeFromList = (list: any, index: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };
  const addToList = (list: any, index: number, element: any) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  }
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const listCopy: any = {...blocks};

    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(sourceList, result.source.index)
    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(destinationList, result.destination.index, removedElement)
    setBlocks(listCopy);

    setDraggable(false);
  }
  console.log(blocks)
  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={() => {setDraggable(true)}}>
        <div className={styles.flex_container}>
          <div className={styles.flex_first}>
            <List name="available" onDragEnd={handleOnDragEnd}>
              {blocks.available.map((block , index: number) => (
                <Draggable
                  key={index}
                  draggableId={block.id}
                  index={index}
                >
                  {(provided: DraggableProvided | any , snapshot: DraggableStateSnapshot) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                        <LeftBlock data={block.name}  />
                    </div>
                  )}
                </Draggable>
              ))}
            </List>
          </div>
          <div className={`${draggable ? styles.flex_second_lighting : styles.flex_second}`}>
            <List name="assigned" onDragEnd={handleOnDragEnd}>
              <div className={styles.block_result}>
                Перетащите сюда
              </div>
              {blocks.assigned.map((block, index: number) => (
                <Draggable
                  key={index}
                  draggableId={block.id}
                  index={index}
                >
                  {(provided: DraggableProvided | any , snapshot: DraggableStateSnapshot) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <RightBlock data={block.name} />
                    </div>
                  )}
                </Draggable>
              ))}
            </List>
          </div>
        </div>
      </DragDropContext>
    </>
  );
};

export default DraggableComponent;