import React, {useEffect, useState} from 'react';
import {Counter} from './components/Counter';
import {CounterSettings} from './components/CounterSettings';
import s from './App.module.css';


export const MAX_VALUE_COUNT = 'maxValueCount'
export const MIN_VALUE_COUNT = 'minValueCount'

export type CounterValueType = number
export type SettingsCounterType = {
    id: string
    title: string
    valueCount: number
}

export function App() {

    const [count, setCount] = useState<CounterValueType>(0);
    const [error, setError] = useState(`enter values and press 'set'`)

    const [settingsCounter, setSettingsCounter] = useState<SettingsCounterType[]>([
        {id: 'maxValueCount', title: 'max value', valueCount: 5},
        {id: 'minValueCount', title: 'min value', valueCount: 0}
    ])

    const onChangeSetMinValue = (id: string, value: number) => {
        const setting = settingsCounter.map(s => ({...s, s: value}))
        setSettingsCounter([...setting])
    }
    const onChangeSetMaxValue = (id: string, value: number) => {
        const setting = settingsCounter.map(s => ({...s, valueCount: value}))
        setSettingsCounter([...setting])
    }

    const setNewSettings = (id: string, value: number) => {
//         const setting = settingsCounter.find(s => s.id)
// debugger
//         if (setting) {
//             setting.valueCount = value
//         }
        // const setting = settingsCounter.map(s => {
        //     return {...s, valueCount: value}
        // })
        const setting = settingsCounter.map(s => {
            if (s.id === id) {
                return {...s, valueCount: value}
            } else {
                return {...s}
            }
        })
        return setSettingsCounter([...setting])
    }

    const setNewValue = () => {
        const newValue = settingsCounter.find(s => s.id === 'minValueCount')
        if (newValue) {
            setCount(newValue.valueCount)
        }
    }
    // useEffect(() => {
    //     const maxValueCount = localStorage.getItem('maxValueCount')
    //     const minValueCount = localStorage.getItem('minValueCount')
    //     if (maxValueCount && minValueCount) {
    //         setSettingsCounter(
    //             {
    //                 ...settingsCounter,
    //                 maxValueCount: JSON.parse(maxValueCount),
    //                 minValueCount: JSON.parse(minValueCount)
    //             }
    //         )
    //     }
    // },[])
    // useEffect(() => {
    //     localStorage.setItem('maxValueCount', JSON.stringify(settingsCounter.maxValueCount))
    //     localStorage.setItem('minValueCount', JSON.stringify(settingsCounter.minValueCount))
    // }, [settingsCounter])

    /*useEffect(() => {
        const countValue = localStorage.getItem('countValue')
        if (countValue) {
            let newCount = JSON.parse(countValue)
            setCount(newCount)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('countValue', JSON.stringify(count))
    }, [count])*/

    const setCountIncValue = () => {
        // const setting = settingsCounter.find(s => s.id === id)

        // if (setting && count <= setting.valueCount) {
        // }
        setCount(count + 1)
    }
    const resetCountValue = () => {
        setCount(0)
    }

    // set interval
    // not using now
    // const slowResetCount = (count: CounterValueType) => {
    //     const interval = setInterval(() => {
    //         if (count !== null && count <= settingsCounter.minValueCount) {
    //             clearInterval(interval)
    //         }
    //         if (count) {
    //             setCount(count--)
    //         }
    //     }, 100)
    // }


    return (
        <div className={s.App}>
            <CounterSettings
                setNewSettings={setNewSettings}
                settingsCounter={settingsCounter}
                onChangeSetMinValue={onChangeSetMinValue}
                onChangeSetMaxValue={onChangeSetMaxValue}
                setNewValue={setNewValue}
                error={error}
            />

            <Counter count={count}
                     error={error}
                     setCountIncValue={setCountIncValue}
                     resetCountValue={resetCountValue}
                // slowResetCount={slowResetCount}
                     settingsCounter={settingsCounter}
            />
        </div>
    );
}

