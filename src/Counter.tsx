import React from 'react';
import {CounterPropsType, CounterValueType} from './App';
import s from './App.module.css';

export type CounterTableProps = {
    count: CounterValueType
}
export type CounterButtonsProps = {
    count: CounterValueType
    setCounterNewValue: (value: CounterValueType) => void
    slowDecrementCount: (value: CounterValueType) => void
}
export type ButtonType = {
    disabled: boolean
    countInc: () => void
    title: string
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (
        <div className={s.App}>
            <CounterTable count={props.count}/>
            <CounterBtn count={props.count}
                        setCounterNewValue={props.setCounterNewValue}
                        slowDecrementCount={props.slowDecrementCount}
            />
        </div>
    )
}

const CounterTable: React.FC<CounterTableProps> = (props) => {
    const colorCount = props.count > 4 ? s.error : ''
    return (
        <div className={s.counter}>
            <h1 className={colorCount}>{props.count}</h1>
        </div>
    )
}

const CounterBtn: React.FC<CounterButtonsProps> = (props) => {

    const countInc = () => {
        props.setCounterNewValue(props.count + 1)
    }
    const countReset = () => {
        props.setCounterNewValue(0)
        // props.slowDecrementCount(props.count) // set interval
    }

    return (
        <div className={s.buttons}>
            <Button disabled={props.count > 4} countInc={countInc} title={'inc'}/>
            <Button disabled={props.count === 0} countInc={countReset} title={'reset'}/>
        </div>
    )
}

const Button = (props: ButtonType) => {
    return <button disabled={props.disabled}
                   className={`${s.btn}`}
                   onClick={props.countInc}>{props.title}</button>
}