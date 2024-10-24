import React, { useState } from 'react';
import { add } from '../../utils';
import './StringCalculator.css'

const StringCalculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');



    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
        } catch (error) {
            setResult(error.message);
        }
    };

    return (
        <div className='container'>
            <h1>String Calculator</h1>
            <input
                className='input'
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter numbers"
            />
            <button className='button' onClick={handleCalculate}>
                Calculate
            </button>
            <p className='result'>Result: {result}</p>
        </div>
    );
};



export default StringCalculator;