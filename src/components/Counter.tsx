import React from 'react';
import {ErrorType, SettingsCounterType} from '../App';
import s from './Counter.module.css';
import {Button} from './Button';

export type CounterTableProps = {
    count: number
    settingsCounter: SettingsCounterType
    error: ErrorType
    slowResetCount: (count: number) => void
}
export type CounterButtonsProps = {
    count: number
    setCountIncValue: () => void
    resetCountValue: () => void
    settingsCounter: SettingsCounterType
    slowResetCount: (count: number) => void
}

export type CounterPropsType = {
    count: number
    setCountIncValue: () => void
    resetCountValue: () => void
    slowResetCount: (count: number) => void
    settingsCounter: SettingsCounterType
    error: ErrorType
}

export const Counter: React.FC<CounterPropsType> = ({settingsCounter, ...props}) => {
    return (
        <div className={s.CounterWrapper}>
            <CounterTable
                count={props.count}
                settingsCounter={settingsCounter}
                error={props.error}
                slowResetCount={props.slowResetCount}
            />
            <CounterBtn count={props.count}
                        setCountIncValue={props.setCountIncValue}
                        resetCountValue={props.resetCountValue}
                        settingsCounter={settingsCounter}
                        slowResetCount={props.slowResetCount}
            />
        </div>
    )
}

const CounterTable: React.FC<CounterTableProps> = ({settingsCounter, ...props}) => {

    const colorCount = props.count >= settingsCounter.maxValueCount.valueCount ? s.error : ''
    const errorStyle = props.error === 'Incorrect value!' ? s.error : ''
    return (
        <div className={s.counter}>
            {props.error ? <p className={errorStyle}>{props.error}</p> : <h1 className={colorCount}>{props.count}</h1>}
        </div>
    )
}

const CounterBtn: React.FC<CounterButtonsProps> = ({settingsCounter, ...props}) => {

    const countInc = () => {
        props.setCountIncValue()
    }
    const countReset = () => {
        props.resetCountValue()
    }
    const slowlyReset = () => {
        props.slowResetCount(props.count)
    }

    return (
        <div className={s.buttons}>
            <Button
                title={'inc'}
                disabled={props.count >= settingsCounter.maxValueCount.valueCount}
                onClickHandler={countInc}
            />
            <Button
                title={'reset'}
                disabled={props.count <= settingsCounter.minValueCount.valueCount}
                onClickHandler={countReset}
            />
            <Button
                title={'slowly reset'}
                disabled={props.count <= settingsCounter.minValueCount.valueCount}
                onClickHandler={slowlyReset}
            />
        </div>
    )
}

