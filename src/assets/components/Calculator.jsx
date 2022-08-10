import React, { useState } from "react";
import style from "./Calculator.module.css";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  //PUT VALUES IN DISPLAY//
  function addNumberInDisplay(e) {
    if (num === 0) {
      setNum(e.target.value);
    } else {
      setNum(num + e.target.value);
    }
  }

  //CLEAR NUMBER IN DISPLAY//
  function clearDisplay() {
    setNum(0);
  }

  //PUT + OR - IN NUMBER//
  function moreLess() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  //CALCULE PRECENTAGE//
  function percentage() {
    setNum(num / 100);
  }

  //GET VALUES AND OPERATOR//
  function getValuesAndOperator(e) {
    if (e.target.value == "/") {
      setOldNum(num);
      setOperator("/");
      setNum(0);
    } else if (e.target.value == "X") {
      setOldNum(num);
      setOperator("X");
      setNum(0);
    } else if (e.target.value == "-") {
      setOldNum(num);
      setOperator("-");
      setNum(0);
    } else if (e.target.value == "+") {
      setOldNum(num);
      setOperator("+");
      setNum(0);
    }
  }

  function result(e) {
    if (operator == "/") {
      setNum(oldNum / num);
    } else if (operator == "X") {
      setNum(oldNum * num);
    } else if (operator == "-") {
      setNum(oldNum - num);
    } else if (operator == "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div className={style.wrapper}>
      <p>CAZIO®</p>
      <div className={style.displayResult}>
        <div className={style.displayLetters}>
          <h1>{num}</h1>
        </div>
      </div>
      <div className={style.numberContainer}>
        <button onClick={clearDisplay} className={style.numberButtons}>
          AC
        </button>
        <button onClick={moreLess} className={style.numberButtons}>
          +/-
        </button>
        <button onClick={percentage} className={style.numberButtons}>
          %
        </button>
        <button
          value="/"
          onClick={getValuesAndOperator}
          className={style.numberButtons}
        >
          /
        </button>
        <button
          value="7"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          7
        </button>
        <button
          value="8"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          8
        </button>
        <button
          value="9"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          9
        </button>
        <button
          onClick={getValuesAndOperator}
          value="X"
          className={style.numberButtons}
        >
          X
        </button>
        <button
          value="4"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          4
        </button>
        <button
          value="5"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          5
        </button>
        <button
          value="6"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          6
        </button>
        <button
          onClick={getValuesAndOperator}
          value="-"
          className={style.numberButtons}
        >
          -
        </button>
        <button
          value="1"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          1
        </button>
        <button
          value="2"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          2
        </button>
        <button
          value="3"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          3
        </button>
        <button
          onClick={getValuesAndOperator}
          value="+"
          className={style.numberButtons}
        >
          +
        </button>
        <button
          value="0"
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          0
        </button>
        <button
          value="."
          onClick={addNumberInDisplay}
          className={style.numberButtons}
        >
          .
        </button>
        <button onClick={result} className={style.numberButtons}>
          =
        </button>
      </div>
    </div>
  );
}
