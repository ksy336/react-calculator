import React from 'react';
import "./EqualSignBlock.scss";

type EqualSignProps = {
  text: string;
}
const EqualSignBlock = ({text}: EqualSignProps) => {
  return (
    <div className="equal-item">
      {text}
    </div>
  );
};

export default EqualSignBlock;