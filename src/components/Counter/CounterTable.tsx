import React from 'react';
import s from './Counter.module.css';
import {ErrorType, SettingsCounterType} from '../../redux/settings-counter-reducer';

export type CounterTableProps = {
    count: number
    settingsCounter: SettingsCounterType
    error: ErrorType
}
export const CounterTable: React.FC<CounterTableProps> = ({settingsCounter, ...props}) => {

    const colorCount = props.count>= settingsCounter.maxValueCount.valueCount ? s.error : ''
    const errorStyle = props.error === 'Incorrect value!' ? s.error : ''
    return (
        <div className={s.counter}>
            {props.error ? <p className={errorStyle}>{props.error}</p> : <h1 className={colorCount}>{props.count}</h1>}
        </div>
    )
}