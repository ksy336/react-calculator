import React from 'react';
import { PanelInterface } from '../LeftBlock/LeftBlock';
import Column from '../Column/Column';

type RightBlockProps = {
  data: PanelInterface[]
}
const RightBlock = ({data}: RightBlockProps) => {
  return (
    <>
      {data?.map((block: PanelInterface) => (
        <Column
          key={block.id}
          mainClass={block.mainClass}
          secondClass={block.secondClass}
          thirdClass={block.thirdClass}
          remove={block.remove}
          buttons={block.buttons}
          status={"runtime"}
        />
      ))}
    </>
  );
};

export default RightBlock;