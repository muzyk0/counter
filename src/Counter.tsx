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
        /*if (props.count < 5) {
            props.setCounterNewValue(props.count + 1)
        }*/
        props.setCounterNewValue(props.count)
    }
    const countReset = () => {
        // props.setCounterNewValue(0)
        props.slowDecrementCount(props.count)
    }
    // const incBtn = props.count >= 0 && props.count < 5 ? false : true
    const incBtn = !(props.count >= 0 && props.count < 5)

    // const resetBtn = props.count > 0 ? false : true
    const resetBtn = props.count <= 0


    return (
        <div className={s.buttons}>
            {/*<button disabled={incBtn} className={`${s.btn} ${s.active}`} onClick={countInc}>inc</button>
            <button disabled={resetBtn} className={`${s.btn}`} onClick={countReset}>reset</button>*/}
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