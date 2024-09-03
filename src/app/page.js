// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [input1, setInput1] = useState();
//   const [input2, setInput2] = useState();
//   const [result, setResult] = useState(0);

//   // const addNumbers = () => {
//   //   setResult(Number(input1) + Number(input2));
//   // };

//   // const submission = () => {
//   //   setResult(Number(input1) - Number(input2));
//   // };

//   const onChange = (e) => {
//     e.target.value;
//   };

//   return (
//     <main>
//       <input
//         type="number"
//         value={input1}
//         onChange={(e) => setInput1(e.target.value)}
//       />

//       <div className="calculator">
//         <button onChange={onChange}>1</button>
//         <button>2</button>
//         <button>3</button>
//         <button>4</button>
//         <button>5</button>
//         <button>6</button>
//         <button>7</button>
//         <button>8</button>
//         <button>9</button>
//         <button className="zero">0</button>
//       </div>
//     </main>
//   );
// }

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
  const handleAddition = (symble) => {
    if (symble === "+") {
    }
  };
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
        <button onClick={() => handleButtonClick("/")}>.</button>
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
