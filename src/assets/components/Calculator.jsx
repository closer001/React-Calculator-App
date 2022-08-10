import React, { useState } from "react";
import style from "./Calculator.module.css";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (e.target.innerText.match(/\d+/g) || e.target.innerText == ".") {
        if (num === 0) {
          setNum(e.target.innerText);
        } else {
          setNum(num + e.target.innerText);
        }
      } else if (e.target.innerText == "AC") {
        setNum(0);
        setOldNum(0);
        setOperator();
      } else if (e.target.innerText == "%") {
        setNum(num / 100);
      } else if (e.target.innerText == "+/-") {
        if (num > 0) {
          setNum(-num);
        } else {
          setNum(Math.abs(num));
        }
      } else if (
        e.target.innerText == "/" ||
        e.target.innerText == "X" ||
        e.target.innerText == "-" ||
        e.target.innerText == "+"
      ) {
        setOperator(e.target.innerText);
        setOldNum(num);
        setNum(0);
      } else if (e.target.innerText == "=") {
        if (operator == "/") {
          setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (e.target.innerText == "X") {
          setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (e.target.innerText == "+") {
          setNum(parseFloat(oldNum) + parseFloat(num));
        } else if (e.target.innerText == "-") {
          setNum(parseFloat(oldNum) - parseFloat(num));
        }
      } else {
        console.log("ERROR");
      }
    });
  });

  return (
    <div className={style.wrapper}>
      <p>CAZIO®</p>
      <div className={style.displayResult}>
        <div className={style.displayLetters}>
          <h1>{num}</h1>
        </div>
      </div>
      <div className={style.numberContainer}>
        <button className={style.numberButtons}>AC</button>
        <button className={style.numberButtons}>+/-</button>
        <button className={style.numberButtons}>%</button>
        <button className={style.numberButtons}>/</button>
        <button className={style.numberButtons}>7</button>
        <button className={style.numberButtons}>8</button>
        <button className={style.numberButtons}>9</button>
        <button className={style.numberButtons}>X</button>
        <button className={style.numberButtons}>4</button>
        <button className={style.numberButtons}>5</button>
        <button className={style.numberButtons}>6</button>
        <button className={style.numberButtons}>-</button>
        <button className={style.numberButtons}>1</button>
        <button className={style.numberButtons}>2</button>
        <button className={style.numberButtons}>3</button>
        <button className={style.numberButtons}>+</button>
        <button className={style.numberButtons}>0</button>
        <button className={style.numberButtons}>.</button>
        <button className={style.numberButtons}>=</button>
      </div>
    </div>
  );
}
