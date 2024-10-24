import React, { useState } from "react";
import { add } from "../../utils";
import "./StringCalculator.css";

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
            setError("");
        } catch (error) {
            setError(error.message);
            setResult("");
        }
    };

    return (
        <div className="container">
            <h1>String Calculator</h1>
            <div className="input-section">
                <textarea
                    className="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter numbers separated by commas or new lines. Use //[delimiter] for custom delimiters."
                />
                <button className="button" onClick={handleCalculate}>
                    Calculate
                </button>
            </div>
            {error ? (
                <p className="error">Error: {error}</p>
            ) : (
                <p className="result">Result: {result}</p>
            )}
        </div>
    );
};

export default StringCalculator;