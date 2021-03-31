import React, {useEffect, useState} from 'react';
import {Counter} from './components/Counter';
import {CounterSettings} from './components/CounterSettings';
import s from './App.module.css';


export type SettingsType = {
    title: string
    valueCount: number
}
export type SettingsCounterType = {
    maxValueCount: SettingsType
    minValueCount: SettingsType
}

export type ErrorType = `enter values and press 'set'` | `Incorrect value!` | ``

export function App() {

    const [count, setCount] = useState<number>(0);
    const [error, setError] = useState<ErrorType>(``)

    const [settingsCounter, setSettingsCounter] = useState<SettingsCounterType>({
        maxValueCount: {title: 'max value', valueCount: 5},
        minValueCount: {title: 'min value', valueCount: 0}
    })

    const setNewSettings = (id: 'maxValueCount' | 'minValueCount', value: number) => {
        setError(`enter values and press 'set'`)
        return setSettingsCounter({
            ...settingsCounter,
            [id]: {...settingsCounter[id], valueCount: value}
        })
    }


    const setNewValue = () => {
        const newValue = settingsCounter.minValueCount
        if (newValue) {
            setCount(newValue.valueCount)
            setError(``)
        }
    }

    useEffect(() => {
        const maxValueCount = localStorage.getItem('maxValueCount')
        const minValueCount = localStorage.getItem('minValueCount')
        if (maxValueCount && minValueCount) {
            setSettingsCounter(
                {
                    ...settingsCounter,
                    maxValueCount: JSON.parse(maxValueCount),
                    minValueCount: JSON.parse(minValueCount)
                }
            )
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        localStorage.setItem('maxValueCount', JSON.stringify(settingsCounter.maxValueCount))
        localStorage.setItem('minValueCount', JSON.stringify(settingsCounter.minValueCount))
    }, [settingsCounter])


    const setCountIncValue = () => {
        setCount(count + 1)
    }
    const resetCountValue = () => {
        setCount(settingsCounter.minValueCount.valueCount)
    }

    // set interval
    // not using now
    const slowResetCount = (count: number) => {
        const interval = setInterval(() => {
            if (count) {
                setCount(--count)
            }
            if (count <= settingsCounter.minValueCount.valueCount) {
                clearInterval(interval)
            }
        }, 100)
    }


    return (
        <div className={s.App}>
            <CounterSettings
                setNewSettings={setNewSettings}
                settingsCounter={settingsCounter}
                setNewValue={setNewValue}
                error={error}
                setError={setError}
            />
            <Counter count={count}
                     error={error}
                     setCountIncValue={setCountIncValue}
                     resetCountValue={resetCountValue}
                     slowResetCount={slowResetCount}
                     settingsCounter={settingsCounter}
            />
        </div>
    );
}

