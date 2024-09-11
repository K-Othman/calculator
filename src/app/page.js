// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [currentInput, setCurrentInput] = useState("");
//   const [previousInput, setPerviousInput] = useState("")
//   const [operator, setOperator] = useState("")
//   const [result, setResult] = useState(null);

//   const handleButtonClick = (value) => {
//     if(result !== null){
//       setCurrentInput(value)
//       setResult(null)
//     } else{
//       setCurrentInput(prevInput => prevInput + value)
//     }
//   }
//   const clear = () => {
//     setInput1("");
//   };

//   return (
//     <main>
//       <input
//         type="text"
//         value={input1}
//         readOnly
//         className="mb-4 p-2 border rounded min-w-full"
//       />
//       {/* <div className="flex  justify-between"> */}
//       <div className="calculator grid grid-cols-4 gap-2">
//         <button onClick={() => handleButtonClick("1")}>1</button>
//         <button onClick={() => handleButtonClick("2")}>2</button>
//         <button onClick={() => handleButtonClick("3")}>3</button>
//         <button onClick={() => handleButtonClick("+")}>+</button>
//         <button onClick={() => handleButtonClick("4")}>4</button>
//         <button onClick={() => handleButtonClick("5")}>5</button>
//         <button onClick={() => handleButtonClick("6")}>6</button>
//         <button onClick={() => handleButtonClick("-")}>-</button>
//         <button onClick={() => handleButtonClick("7")}>7</button>
//         <button onClick={() => handleButtonClick("8")}>8</button>
//         <button onClick={() => handleButtonClick("9")}>9</button>
//         <button onClick={() => handleButtonClick("*")}>*</button>
//         <button onClick={() => clear()}>C</button>

//         <button onClick={() => handleButtonClick("0")}>0</button>
//         <button onClick={() => handleButtonClick(".")}>.</button>
//         <button onClick={() => handleButtonClick("/")}>/</button>
//         <button className="equal">=</button>
//       </div>
//       {/* <div className="flex flex-col mr-4 calculator">
//           <button>+</button>
//           <button>-</button>
//           <button>*</button>
//           <button>/</button>
//         </div> */}
//       {/* </div> */}
//     </main>
//   );
// }

// "use client";
// import { useState } from "react";

// export default function Home() {
//   const [currentInput, setCurrentInput] = useState(""); // Current number input
//   const [previousInput, setPreviousInput] = useState(""); // Previous number input
//   const [operator, setOperator] = useState(""); // Selected operator
//   const [result, setResult] = useState(null); // Calculation result

//   const handleButtonClick = (value) => {
//     if (result !== null) {
//       // Clear result if any before starting new input
//       setCurrentInput(value);
//       setResult(null);
//     } else {
//       setCurrentInput((prevInput) => prevInput + value); // Append clicked number to current input
//     }
//   };

//   const handleOperatorClick = (op) => {
//     if (currentInput === "") return; // Don't set operator if no number input

//     if (previousInput && operator) {
//       // If there's a previous input and operator, calculate first
//       const calc = calculate();
//       setPreviousInput(calc); // Set result as the previous input
//       setCurrentInput(""); // Clear the current input for next number
//     } else {
//       setPreviousInput(currentInput); // Store current input as previous
//       setCurrentInput(""); // Clear the current input for the next number
//     }
//     setOperator(op); // Store the selected operator
//   };

//   const handleEqualClick = () => {
//     if (previousInput && currentInput && operator) {
//       const calc = calculate(); // Perform the calculation
//       setResult(calc); // Store the result
//       setPreviousInput(""); // Clear previous input
//       setOperator(""); // Clear the operator
//       setCurrentInput(calc.toString()); // Display the result
//     }
//   };

//   const calculate = () => {
//     const num1 = parseFloat(previousInput);
//     const num2 = parseFloat(currentInput);

//     switch (operator) {
//       case "+":
//         return num1 + num2;
//       case "-":
//         return num1 - num2;
//       case "*":
//         return num1 * num2;
//       case "/":
//         return num1 / num2;
//       default:
//         return currentInput;
//     }
//   };

//   const clear = () => {
//     setCurrentInput(""); // Clear all inputs
//     setPreviousInput("");
//     setOperator("");
//     setResult(null);
//   };

//   return (
//     <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <input
//         type="text"
//         value={currentInput || result || ""}
//         readOnly
//         className="mb-4 p-2 border rounded w-64 text-center"
//       />
//       <div className="calculator grid grid-cols-4 gap-2">
//         <button onClick={() => handleButtonClick("1")}>1</button>
//         <button onClick={() => handleButtonClick("2")}>2</button>
//         <button onClick={() => handleButtonClick("3")}>3</button>
//         <button onClick={() => handleOperatorClick("+")}>+</button>
//         <button onClick={() => handleButtonClick("4")}>4</button>
//         <button onClick={() => handleButtonClick("5")}>5</button>
//         <button onClick={() => handleButtonClick("6")}>6</button>
//         <button onClick={() => handleOperatorClick("-")}>-</button>
//         <button onClick={() => handleButtonClick("7")}>7</button>
//         <button onClick={() => handleButtonClick("8")}>8</button>
//         <button onClick={() => handleButtonClick("9")}>9</button>
//         <button onClick={() => handleOperatorClick("*")}>*</button>
//         <button onClick={clear}>C</button>
//         <button onClick={() => handleButtonClick("0")}>0</button>
//         <button onClick={() => handleButtonClick(".")}>.</button>
//         <button onClick={() => handleOperatorClick("/")}>/</button>
//         <button onClick={handleEqualClick} className="equal">
//           =
//         </button>
//       </div>
//     </main>
//   );
// }

"use client";
import { useState } from "react";

export default function Home() {
  const [currentInput, setCurrentInput] = useState(""); // Current number input
  const [previousInput, setPreviousInput] = useState(""); // Previous number input
  const [operator, setOperator] = useState(""); // Selected operator
  const [result, setResult] = useState(null); // Calculation result

  const handleButtonClick = (value) => {
    if (result !== null) {
      // Clear result if any before starting new input
      setCurrentInput(value);
      setResult(null);
    } else {
      setCurrentInput((prevInput) => prevInput + value); // Append clicked number to current input
    }
  };

  const handleOperatorClick = (op) => {
    if (currentInput === "") return; // Don't set operator if no number input

    if (previousInput && operator) {
      // If there's a previous input and operator, calculate first
      const calc = calculate();
      setPreviousInput(calc); // Set result as the previous input
      setCurrentInput(""); // Clear the current input for next number
    } else {
      setPreviousInput(currentInput); // Store current input as previous
      setCurrentInput(""); // Clear the current input for the next number
    }
    setOperator(op); // Store the selected operator
  };

  const handleEqualClick = () => {
    if (previousInput && currentInput && operator) {
      const calc = calculate(); // Perform the calculation
      setResult(calc); // Store the result
      setPreviousInput(""); // Clear previous input
      setOperator(""); // Clear the operator
      setCurrentInput(""); // Clear the current input to avoid double display
    }
  };

  const calculate = () => {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return currentInput;
    }
  };

  const clear = () => {
    setCurrentInput(""); // Clear all inputs
    setPreviousInput("");
    setOperator("");
    setResult(null);
  };

  const getDisplayEquation = () => {
    if (result !== null) {
      return `${previousInput} ${operator} ${currentInput}  ${result}`;
    }
    return `${previousInput} ${operator} ${currentInput}`;
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        value={getDisplayEquation()}
        readOnly
        className="mb-4 p-2 w-full border rounded text-center"
      />
      <div className="calculator grid grid-cols-4 gap-2">
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={clear}>C</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={handleEqualClick} className="equal">
          =
        </button>
      </div>
    </main>
  );
}
