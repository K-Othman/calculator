"use client";
import { useState } from "react";

export default function Home() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    setResult(Number(input1) + Number(input2));
  };

  const test = (v) => {
    console.log(v.target.value);
  };
  return (
    <main>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />

      <button onClick={addNumbers}>+</button>

      <h2>Result : {result}</h2>
    </main>
  );
}
