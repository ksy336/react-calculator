import React from 'react';
import Display from '../Display/Display';
import MathOperators from '../MathOperations/MathOperators';
import styles from '../../app/app.module.scss';
import { IButton } from '../LeftBlock/LeftBlock';
import NumbersBlock from '../NumbersBlock/NumbersBlock';
import EqualSignBlock from '../EqualSignBlock/EqualSignBlock';

type ColumnProps = {
  mainClass?: string,
  secondClass?: string,
  thirdClass?: string,
  remove: boolean,
  buttons?: IButton[],
  status: string
}
const Column = ({mainClass, secondClass, remove, buttons, status }: ColumnProps) => {
  return (
    <>
      {mainClass === "display" && (
        <div className={styles.block_draggable__display}>
          <Display />
        </div>
      )}
      {mainClass === "operators" && (
        // <div className="calc-container">
          <div className={styles.block_draggable}>
            <div className="operators">
              {buttons?.map((button: IButton) => (
                <MathOperators key={button.id} text={button.text} />
              ))}
            </div>
        </div>
      )}
      {mainClass === "numbers" && (
        // <div className="calc-container">
        <div className={styles.block_draggable__numbers}>
          <div className="num-block">
            {buttons?.map((button: IButton) => (
              <NumbersBlock key={button.id} text={button.text} />
            ))}
          </div>
        </div>
      )}
      {mainClass === "equal" && (
        <div className={styles.block_draggable__equal}>
          <div className="equal-block">
            {buttons?.map((button: IButton) => (
              <EqualSignBlock key={button.id} text={button.text} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Column;