import React from 'react';
import {Counter,} from './components/Counter/Counter';
import {CounterSettings} from './components/SettingsCounter/CounterSettings';
import s from './App.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './redux/store';
import {ErrorType, setErrorAC, SettingsCounterType} from './redux/settings-counter-reducer';

export function App() {


    const settingsCounter = useSelector<AppStateType, SettingsCounterType>(state => state.settingsCounter)

    /*    useEffect(() => {
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
        }, [settingsCounter])*/

    const dispatch = useDispatch()

    const setError = (value: ErrorType) => {
        dispatch(setErrorAC(value))
    }

    return (
        <div className={s.App}>
            <CounterSettings settingsCounter={settingsCounter}
                             setError={setError}
            />
            <Counter settingsCounter={settingsCounter}/>
        </div>
    )
}

