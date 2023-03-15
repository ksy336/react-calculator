import React from 'react';
import "./NumbersBlock.scss";

type NumbersProps = {
  text: string;
}
const NumbersBlock = ({text}: NumbersProps) => {
  return (
    <div className="num-item">
      {text}
    </div>
  );
};

export default NumbersBlock;