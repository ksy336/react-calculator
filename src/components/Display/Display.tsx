import React from 'react';
import "./Display.scss";
import styles from '../../app/app.module.scss';

type DisplayProps = {
  name: string
}
const Display = ({name}: DisplayProps) => {
  return (
    <div className={styles.block_draggable}>
      <div className="output">
        {name}
      </div>
    </div>
  );
};

export default Display;