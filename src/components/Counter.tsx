import React from 'react';
import {CounterValueType, ErrorType, SettingsCounterType} from '../App';
import s from './Counter.module.css';
import {Button} from './Button';

export type CounterTableProps = {
    count: CounterValueType
    settingsCounter: SettingsCounterType[]
    error: ErrorType
}
export type CounterButtonsProps = {
    count: CounterValueType
    setCountIncValue: () => void
    resetCountValue: () => void
    // slowResetCount: (value: CounterValueType) => void
    settingsCounter: SettingsCounterType[]
}

export type CounterPropsType = {
    count: CounterValueType
    setCountIncValue: () => void
    resetCountValue: () => void
    settingsCounter: SettingsCounterType[]
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

    const colorCount = props.error.title ? s.error : ''
    return (
        <div className={s.counter}>
            {/*{props.error ? props.error : <h1 className={colorCount}>{props.count}</h1>}*/}
            {props.error.title ? <p>{props.error.title}</p> : <h1 className={colorCount}>{props.count}</h1>}
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
    // @ts-ignore
    const maxButtonDisabled = settingsCounter.find(s => s.id === 'maxValueCount').valueCount
    // @ts-ignore
    const minButtonDisabled = settingsCounter.find(s => s.id === 'minValueCount').valueCount

    console.log(maxButtonDisabled);

    return (
        <div className={s.buttons}>
            <Button
                title={'inc'}
                disabled={props.count >= maxButtonDisabled}
                onClickHandler={countInc}
            />
            <Button
                title={'reset'}
                disabled={props.count <= minButtonDisabled}
                onClickHandler={countReset}
            />
        </div>
    )
}

