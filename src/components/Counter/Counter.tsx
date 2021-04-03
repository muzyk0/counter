import React from 'react';
import s from './Counter.module.css';
import {Button} from '../Button/Button';
import {useDispatch} from 'react-redux';
import {
    setCountDecrementValue,
    setCountIncValue,
    setCountResetValue,
    SettingsCounterType
} from '../../redux/settings-counter-reducer';
import {Btn, CounterWrapper, Table} from '../CounterWrapper';

export type CounterPropsType = {
    settingsCounter: SettingsCounterType
}

export const Counter: React.FC<CounterPropsType> = ({settingsCounter}) => {
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

    const colorCount = settingsCounter.count >= settingsCounter.maxValueCount.valueCount ? s.error : ''
    const errorStyle = settingsCounter.error === 'Incorrect value!' ? s.error : ''

    return (
        /*<div className={s.CounterWrapper}>
            <CounterTable settingsCounter={settingsCounter}/>
            <CounterBtn settingsCounter={settingsCounter}/>
        </div>*/
        <CounterWrapper>
            <Table>
                {settingsCounter.error
                    ? <p className={errorStyle}>{settingsCounter.error}</p>
                    : <h1 className={colorCount}>{settingsCounter.count}</h1>
                }
            </Table>
            <Btn>
                <Button
                    title={'inc'}
                    disabled={!!settingsCounter.error || settingsCounter.count >= settingsCounter.maxValueCount.valueCount}
                    onClickHandler={countInc}
                />
                <Button
                    title={'dec'}
                    disabled={!!settingsCounter.error || settingsCounter.count <= settingsCounter.minValueCount.valueCount}
                    onClickHandler={countDecrement}
                />
                <Button
                    title={'reset'}
                    disabled={!!settingsCounter.error || settingsCounter.count <= settingsCounter.minValueCount.valueCount}
                    onClickHandler={countReset}
                />
            </Btn>
        </CounterWrapper>
    )
}

