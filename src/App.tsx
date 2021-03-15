import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';

export type CounterValueType = number
export type CounterPropsType = {
    count: CounterValueType
    setCounterNewValue: (value: CounterValueType) => void
    resetCountValue: (value: CounterValueType) => void
    slowResetCount: (value: CounterValueType) => void
}

export function App() {

    const [count, setCount] = useState<CounterValueType>(0);

    useEffect(() => {
        const countValue = localStorage.getItem('countValue')
        if (countValue) {
            let newCount = JSON.parse(countValue)
            setCount(newCount)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])

    const setCountIncValue = (count: CounterValueType) => {
        //setCount(count)
        if (count <= 5) {
            setCount(count + 1)
        }
    }
    const resetCountValue = (count: CounterValueType) => {
        setCount(count)
    }

    // set interval
    // using
    const slowResetCount = (value: CounterValueType) => {
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
                     setCounterNewValue={setCountIncValue}
                     resetCountValue={resetCountValue}
                     slowResetCount={slowResetCount}
            />
        </div>
    );
}

