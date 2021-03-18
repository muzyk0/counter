import React from 'react';
import {CounterValueType, ErrorType, SettingsCounterType} from '../App';
import s from './Counter.module.css';
import {Button} from './Button';

export type CounterTableProps = {
    count: CounterValueType
    settingsCounter: SettingsCounterType
    error: ErrorType
    slowResetCount: (count: CounterValueType) => void
}
export type CounterButtonsProps = {
    count: CounterValueType
    setCountIncValue: () => void
    resetCountValue: () => void
    settingsCounter: SettingsCounterType
    slowResetCount: (count: CounterValueType) => void
}

export type CounterPropsType = {
    count: CounterValueType
    setCountIncValue: () => void
    resetCountValue: () => void
    slowResetCount: (count: CounterValueType) => void
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
                // slowResetCount={props.slowResetCount}
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
            {/*{props.error ? props.error : <h1 className={colorCount}>{props.count}</h1>}*/}
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
        //props.slowResetCount(props.count) // set interval
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

