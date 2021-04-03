import React from 'react';
import s from './Counter.module.css';
import {Button} from '../Button/Button';
import {CounterTable} from './CounterTable';
import {useDispatch} from 'react-redux';
import {
    ErrorType,
    setCountDecrementValue,
    setCountIncValue,
    setCountResetValue,
    SettingsCounterType
} from '../../redux/settings-counter-reducer';

export type CounterButtonsProps = {
    count: number
    settingsCounter: SettingsCounterType
    error: ErrorType
}

export type CounterPropsType = {
    count: number
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
            />
            <CounterBtn
                count={props.count}
                error={props.error}
                settingsCounter={settingsCounter}
            />
        </div>
    )
}

const CounterBtn: React.FC<CounterButtonsProps> = ({settingsCounter, ...props}) => {

    const dispatch = useDispatch()

    const countInc = () => {
        dispatch(setCountIncValue())
    }
    const countDecrement = () => {
        dispatch(setCountDecrementValue())
    }
    const countReset = () => {
        dispatch(setCountResetValue())
    }

    const slowResetCount = (count: number) => {
        const interval = setInterval(() => {
            if (count) {
                // setCount(--count)
            }
            if (count <= settingsCounter.minValueCount.valueCount) {
                clearInterval(interval)
            }
        }, 100)
    }

    return (
        <div className={s.buttons}>
            <Button
                title={'inc'}
                disabled={!!props.error && props.count >= settingsCounter.maxValueCount.valueCount}
                onClickHandler={countInc}
            />
            <Button
                title={'dec'}
                disabled={props.count <= settingsCounter.minValueCount.valueCount}
                onClickHandler={countDecrement}
            />
            <Button
                title={'reset'}
                disabled={props.count <= settingsCounter.minValueCount.valueCount}
                onClickHandler={countReset}
            />
        </div>
    )
}

