import React from 'react';
import styles from '../../app/app.module.scss';

type Props = {
  data: {
    name?: string;
  }
}
const Card = ({data}: Props) => {
  return (
    <>
      <div className={styles.block_draggable}>
        {data.name}
      </div>
    </>
  );
};

export default Card;