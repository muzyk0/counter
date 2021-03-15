import React, {useEffect, useState} from 'react';
import {Counter} from './Counter';

export type CounterValueType = number

export type SettingCounterType = {
    maxValueCount: number
    minValueCount: number
}
export type CounterPropsType = {
    count: CounterValueType
    setCounterNewValue: (value: CounterValueType) => void
    resetCountValue: (value: CounterValueType) => void
    slowResetCount: (value: CounterValueType) => void
    settingsCounter: SettingCounterType
}

export function App() {

    const MAX_VALUE_COUNT = 5
    const MIN_VALUE_COUNT = 0

    const [count, setCount] = useState<CounterValueType>(0);

    const [settingsCounter, setSettingsCounter] = useState({
        maxValueCount: MAX_VALUE_COUNT,
        minValueCount: MIN_VALUE_COUNT
    })

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
        if (count <= settingsCounter.maxValueCount) {
            setCount(count + 1)
        }
    }
    const resetCountValue = (count: CounterValueType) => {
        setCount(count)
    }

    // set interval
    // using now
    const slowResetCount = (value: CounterValueType) => {
        const interval = setInterval(() => {
            if (value <= settingsCounter.minValueCount) {
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
                     settingsCounter={settingsCounter}
            />
        </div>
    );
}

