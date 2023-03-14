import React from 'react';
import "./MathOperators.scss";
import styles from '../../app/app.module.scss';
import { IButton } from '../LeftBlock/LeftBlock';

type OperatorsProps = {
  text: string;
}
const MathOperators = ({text}: OperatorsProps) => {
  return (
      <div className="operators">
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