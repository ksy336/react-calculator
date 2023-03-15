import React, { useState } from 'react';
import "./Display.scss";
import styles from '../../app/app.module.scss';

type DisplayProps = {
  name: string
}
const Display = () => {
  const [output, setOutPut] = useState(0);
  return (
      <div className="output">
        {output}
      </div>
  );
};

export default Display;