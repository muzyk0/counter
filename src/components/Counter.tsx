import React from 'react';
import {CounterValueType, ErrorType, SettingsCounterType} from '../App';
import s from './Counter.module.css';
import {Button} from './Button';

export type CounterTableProps = {
    count: CounterValueType
    settingsCounter: SettingsCounterType
    error: ErrorType
}
export type CounterButtonsProps = {
    count: CounterValueType
    setCountIncValue: () => void
    resetCountValue: () => void
    // slowResetCount: (value: CounterValueType) => void
    settingsCounter: SettingsCounterType
}

export type CounterPropsType = {
    count: CounterValueType
    setCountIncValue: () => void
    resetCountValue: () => void
    settingsCounter: SettingsCounterType
    error: ErrorType
}

export const Counter: React.FC<CounterPropsType> = ({settingsCounter, ...props}) => {
    return (
        <div className={s.CounterWrapper}>
            <CounterTable count={props.count} settingsCounter={settingsCounter} error={props.error}/>
            <CounterBtn count={props.count}
                        setCountIncValue={props.setCountIncValue}
                // slowResetCount={props.slowResetCount}
                        resetCountValue={props.resetCountValue}
                        settingsCounter={settingsCounter}
            />
        </div>
    )
}

const CounterTable: React.FC<CounterTableProps> = ({settingsCounter, ...props}) => {

    // let colorCount
    // if (props.count) {
    //     colorCount = props.count === props.error ? s.error : ''
    // }

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

    // const setting = settingsCounter.find(s => s.id)
    //
    // if (setting) {
    //
    //     const countInc = () => {
    //         props.setCountIncValue(setting.id, props.count)
    //     }
    //     const countReset = () => {
    //         props.setCountIncValue(setting.id, props.count)
    //         //props.slowResetCount(props.count) // set interval
    //     }
    //
    // }

    const countInc = () => {
        props.setCountIncValue()
    }
    const countReset = () => {
        props.resetCountValue()
        //props.slowResetCount(props.count) // set interval
    }

    // todo fix @ts-ignore
    // const maxButtonDisabled = settingsCounter.find(s => s.id === 'maxValueCount').valueCount
    // const minButtonDisabled = settingsCounter.find(s => s.id === 'minValueCount').valueCount


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
        </div>
    )
}

