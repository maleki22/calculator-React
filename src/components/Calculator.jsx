import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [expression, setExpression] = useState("");

  function calculate(operation) {
    const a = Number(num1);
    const b = Number(num2);

    setError("");

    if (operation === "add") {
      setResult(parseFloat((a + b).toFixed(2)));
      setExpression(`${a} ➕ ${b} =`);
    }
    if (operation === "subtract") {
      setResult(parseFloat((a - b).toFixed(2)));
      setExpression(`${a} ➖ ${b} =`);
    }
    if (operation === "multiply") {
      setResult(parseFloat((a * b).toFixed(2)));
      setExpression(`${a} ✖️ ${b} =`);
    }
    if (operation === "divide" && b === 0) {
      setError("❌ Cannot divide by zero!");
      setResult(null);
      return;
    }
    if (operation === "divide") {
      setResult(parseFloat((a / b).toFixed(2)));
      setExpression(`${a} ➗ ${b} =`);
    }
  }

  function clear() {
    setNum1("");
    setNum2("");
    setResult(null);
    setError("");
    setExpression("");
  }

  return (
    <div className="calculator">
      <h1 className="calculator-title">Calculator</h1>
      <div className="inputs">
        <input
          className="calculator-input"
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
        />
        <input
          className="calculator-input"
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
        />
      </div>

      <div className="buttons">
        <button className="calc-btn" onClick={() => calculate("add")}>➕</button>
        <button className="calc-btn" onClick={() => calculate("subtract")}>➖</button>
        <button className="calc-btn" onClick={() => calculate("multiply")}>✖️</button>
        <button className="calc-btn" onClick={() => calculate("divide")}>➗</button>

        <button className="clear-btn" onClick={() => clear()}>🔄 clear</button>
      </div>

      {result !== null &&
        <h2 className="result">{expression} {result}</h2>
      }

      {error &&
        <p className="error">{error}</p>
      }
    </div>
  );
}

export default Calculator;