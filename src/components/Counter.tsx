import React from 'react';
import {CounterValueType, SettingsCounterType} from '../App';
import s from './Counter.module.css';
import {Button} from './Button';

export type CounterTableProps = {
    count: CounterValueType
    settingsCounter: SettingsCounterType
    error: string
}
export type CounterButtonsProps = {
    count: CounterValueType
    setCounterNewValue: (value: CounterValueType) => void
    resetCountValue: () => void
    slowResetCount: (value: CounterValueType) => void
    settingsCounter: SettingsCounterType
}

export type CounterPropsType = {
    count: CounterValueType
    setCounterNewValue: (value: CounterValueType) => void
    resetCountValue: () => void
    slowResetCount: (value: CounterValueType) => void
    settingsCounter: SettingsCounterType
    error: string
}

export const Counter: React.FC<CounterPropsType> = ({settingsCounter, ...props}) => {
    return (
        <div className={s.CounterWrapper}>
            <CounterTable count={props.count} settingsCounter={settingsCounter} error={props.error}/>
            <CounterBtn count={props.count}
                        setCounterNewValue={props.setCounterNewValue}
                        slowResetCount={props.slowResetCount}
                        resetCountValue={props.resetCountValue}
                        settingsCounter={settingsCounter}
            />
        </div>
    )
}

const CounterTable: React.FC<CounterTableProps> = ({settingsCounter, ...props}) => {

    // if (props.count === null) {
    //     countIsNull = `enter values and press 'set'`
    // } else if (props.count < 0) {
    //     countIsNull = `Incorrect value!`
    // } else {
    //     countIsNull = props.count
    // }

    let colorCount
    if (props.count) {
        colorCount = props.count >= settingsCounter.maxValueCount ? s.error : ''
    }
    return (
        <div className={s.counter}>
            {props.error ? props.error : <h1 className={colorCount}>{props.count}</h1>}
        </div>
    )
}

const CounterBtn: React.FC<CounterButtonsProps> = ({settingsCounter, ...props}) => {

    const countInc = () => {
        props.setCounterNewValue(props.count)
    }
    const countReset = () => {
        props.resetCountValue()
        //props.slowResetCount(props.count) // set interval
    }

    const maxValueDisabled = (props.count < settingsCounter.maxValueCount)
    const minValueDisabled = (props.count < settingsCounter.minValueCount)

    return (
        <div className={s.buttons}>
            <Button
                title={'inc'}
                disabled={props.count === settingsCounter.maxValueCount}
                // disabled={minValueDisabled}
                onClickHandler={countInc}
            />
            <Button
                title={'reset'}
                disabled={props.count === settingsCounter.minValueCount}
                // disabled={maxValueDisabled}
                onClickHandler={countReset}
            />
        </div>
    )
}

