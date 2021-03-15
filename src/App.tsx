import React, {useEffect, useState} from 'react';
import {Counter} from './components/Counter';
import {CounterSettings} from './components/CounterSettings';
import s from './App.module.css';


export const MAX_VALUE_COUNT = 'maxValueCount'
export const MIN_VALUE_COUNT = 'minValueCount'

export type CounterValueType = number
export type SettingsCounterType = {
    maxValueCount: number
    minValueCount: number
}

export function App() {

    const [count, setCount] = useState<CounterValueType>(0);
    const [error, setError] = useState(`enter values and press 'set'`)

    const [settingsCounter, setSettingsCounter] = useState<SettingsCounterType>({
        [MAX_VALUE_COUNT]: 5,
        [MIN_VALUE_COUNT]: 0
    })

    const onChangeSetMinValue = (value: number, arg: string) => {
        if (value < 0) {
            setError('Incorrect value!')
            setSettingsCounter({...settingsCounter, [arg]: value})
        } else if (value <= settingsCounter.minValueCount) {
            setError('Incorrect value!')
            setSettingsCounter({...settingsCounter, [arg]: value})
        } else {
            setError(`enter values and press 'set'`)
            setSettingsCounter({...settingsCounter, [arg]: value})
        }
    }
    const onChangeSetMaxValue = (value: number, arg: string) => {
        if (value < 0) {
            setError('Incorrect value!')
        } else if (value <= settingsCounter.maxValueCount) {
            setError('Incorrect value!')
        } else {
            setError(`enter values and press 'set'`)
        }
        setSettingsCounter({...settingsCounter, [arg]: value})
    }
    const setNewValue = () => {
        setError('')
        setCount(settingsCounter.minValueCount)
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

    const setCountIncValue = (count: CounterValueType) => {
        //setCount(count)
        if (count <= settingsCounter.maxValueCount) {
            setCount(count + 1)
        }
    }
    const resetCountValue = () => {
        setCount(settingsCounter.minValueCount)
    }

    // set interval
    // not using now
    const slowResetCount = (count: CounterValueType) => {
        const interval = setInterval(() => {
            if (count !== null && count <= settingsCounter.minValueCount) {
                clearInterval(interval)
            }
            if (count) {
                setCount(count--)
            }
        }, 100)
    }


    return (
        <div className={s.App}>
            <CounterSettings
                settingsCounter={settingsCounter}
                onChangeSetMinValue={onChangeSetMinValue}
                onChangeSetMaxValue={onChangeSetMaxValue}
                setNewValue={setNewValue}
                error={error}
            />

            <Counter count={count}
                     error={error}
                     setCounterNewValue={setCountIncValue}
                     resetCountValue={resetCountValue}
                     slowResetCount={slowResetCount}
                     settingsCounter={settingsCounter}
            />
        </div>
    );
}

