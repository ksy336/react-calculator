import React from 'react';
import "./MathOperators.scss";

type OperatorsProps = {
  text: string;
}
const MathOperators = ({text}: OperatorsProps) => {
  return (
      <div className="operator-item">
        {/*{operators.map((operator, index) => (*/}
        {/*  <div className="operator-item" key={index}>*/}
        {/*    {operator}*/}
        {/*  </div>*/}
        {/*))}*/}
        {text}
      </div>
  );
};

export default MathOperators;