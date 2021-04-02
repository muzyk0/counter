import {ErrorType, SettingsCounterType} from '../../App';
import React from 'react';
import s from './Counter.module.css';

export type CounterTableProps = {
    count: number
    settingsCounter: SettingsCounterType
    error: ErrorType
    slowResetCount: (count: number) => void
}
export const CounterTable: React.FC<CounterTableProps> = ({settingsCounter, ...props}) => {

    const colorCount = props.count >= settingsCounter.maxValueCount.valueCount ? s.error : ''
    const errorStyle = props.error === 'Incorrect value!' ? s.error : ''
    return (
        <div className={s.counter}>
            {props.error ? <p className={errorStyle}>{props.error}</p> : <h1 className={colorCount}>{props.count}</h1>}
        </div>
    )
}