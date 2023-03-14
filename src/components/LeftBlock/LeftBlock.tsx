import React from 'react';
import styles from '../../app/app.module.scss';
import Column from '../Column/Column';

export interface IButton {
  id: number,
  text: string,
}

export interface PanelInterface  {
  id: number,
  mainClass?: string,
  secondClass?: string,
  thirdClass?: string,
  remove: boolean,
  buttons?: IButton[]
}

type LeftBlockProps = {
  data: PanelInterface[]
}
const LeftBlock = ({data}: LeftBlockProps) => {
  return (
    <div className={styles.block_draggable}>
      {data?.map((block: PanelInterface) => (
        <Column
          key={block.id}
          mainClass={block.mainClass}
          secondClass={block.secondClass}
          thirdClass={block.thirdClass}
          remove={block.remove}
          buttons={block.buttons}
        />
      ))}
    </div>
  );
};

export default LeftBlock;