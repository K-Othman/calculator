"use client";
import { useState } from "react";

export default function Home() {
  const [input1, setInput1] = useState("");
  const [result, setResult] = useState(0);

  const handleButtonClick = (number) => {
    setInput1((prevInput) => prevInput + number);
    // if (number === "+") {
    //   console.log(setInput1(number + number));
    // }
  };
  // const handleAddition = (symble, num1, num2) => {
  //   if (symble === "+") {
  //     return Number(num1) + Number(num2);
  //   }
  // };
  const clear = () => {
    setInput1("");
  };

  return (
    <main>
      <input
        type="text"
        value={input1}
        readOnly
        className="mb-4 p-2 border rounded min-w-full"
      />
      {/* <div className="flex  justify-between"> */}
      <div className="calculator grid grid-cols-4 gap-2">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => clear()}>C</button>

        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button className="equal">=</button>
      </div>
      {/* <div className="flex flex-col mr-4 calculator">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
        </div> */}
      {/* </div> */}
    </main>
  );
}
