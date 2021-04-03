import React from 'react';
import s from './Counter.module.css';
import {SettingsCounterType} from '../../redux/settings-counter-reducer';

export type CounterTableProps = {
    settingsCounter: SettingsCounterType
}
export const CounterTable: React.FC<CounterTableProps> = ({settingsCounter}) => {

    const colorCount = settingsCounter.count>= settingsCounter.maxValueCount.valueCount ? s.error : ''
    const errorStyle = settingsCounter.error === 'Incorrect value!' ? s.error : ''
    return (
        <>
            {settingsCounter.error ? <p className={errorStyle}>{settingsCounter.error}</p> : <h1 className={colorCount}>{settingsCounter.count}</h1>}
        </>
    )
}