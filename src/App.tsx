import React, {useState} from 'react';
import {Counter} from './Counter';

export type CounterValueType = number
export type CounterPropsType = {
    count: CounterValueType
    setCounterNewValue: (value: CounterValueType) => void
    slowDecrementCount: (value: CounterValueType) => void
}

export function App() {
    const [count, setCount] = useState<CounterValueType>(0);

    const setCounterNewValue = (count: CounterValueType) => {
        // setCount(count)
        if (count <= 5) {
            setCount(count)
        }
    }

    // set interval
    const slowDecrementCount = (value: CounterValueType) => {
        const interval = setInterval(() => {
            if (value <= 0) {
                clearInterval(interval)
            }
            setCount(value--)
        }, 100)
    }

    return (
        <div>
            <Counter count={count}
                     setCounterNewValue={setCounterNewValue}
                     slowDecrementCount={slowDecrementCount}
            />
        </div>
    );
}

