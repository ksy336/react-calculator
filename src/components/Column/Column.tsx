import React from 'react';
import Display from '../Display/Display';
import MathOperators from '../MathOperations/MathOperators';
import styles from '../../app/app.module.scss';
import { IButton } from '../LeftBlock/LeftBlock';

type ColumnProps = {
  mainClass?: string,
  secondClass?: string,
  thirdClass?: string,
  remove: boolean,
  buttons?: IButton[]
}
const Column = ({mainClass, secondClass, remove, buttons }: ColumnProps) => {
  return (
    <>
      {mainClass === "display" && (
        <div className={styles.block_draggable}>
          <Display name={"0"}/>
        </div>
      )}
      {mainClass === "operators" && (
        <div className="calc-container">
          {buttons?.map((button: IButton) => (
            <div className="parent-container">
              <div className={styles.block_draggable}>
                <MathOperators text={button.text} />
              </div>
            </div>
          ))}
        </div>
      )}

    </>
  );
};

export default Column;