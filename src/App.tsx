import React, {useState} from 'react';
import {Counter} from './components/Counter';
import {CounterSettings} from './components/CounterSettings';
import s from './App.module.css';


export type CounterValueType = number

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

    const [count, setCount] = useState<CounterValueType>(0);
    const [error, setError] = useState<ErrorType>(``)

    const [settingsCounter, setSettingsCounter] = useState<SettingsCounterType>({
        maxValueCount: {title: 'max value', valueCount: 5},
        minValueCount: {title: 'min value', valueCount: 0}
    })

    // const onChangeSetMinValue = (id: string, value: number) => {
    //     const setting = settingsCounter.map(s => ({...s, s: value}))
    //     setSettingsCounter([...setting])
    // }
    // const onChangeSetMaxValue = (id: string, value: number) => {
    //     const setting = settingsCounter.map(s => ({...s, valueCount: value}))
    //     setSettingsCounter([...setting])
    // }

    const setNewSettings = (id: 'maxValueCount' | 'minValueCount', value: number) => {
        // const setting = settingsCounter.map(s => (s.id === id) ? {...s, valueCount: value} : {...s})
        setError(`enter values and press 'set'`)



        return setSettingsCounter({
            ...settingsCounter,
            [id]: {...settingsCounter[id], valueCount: value}
        })

        // return setSettingsCounter([...setting])
    }


    const setNewValue = () => {
        const newValue = settingsCounter.minValueCount
        if (newValue) {
            setCount(newValue.valueCount)
            setError(``)
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
                setNewValue={setNewValue}
                error={error}
                setError={setError}
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

