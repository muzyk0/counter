import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    setCountDecrementValue,
    setCountIncValue,
    setCountResetValue,
    SettingsCounterType
} from '../../redux/counter-reducer';
import {Btn, CounterWrapper, Table} from '../CounterWrapper';
import {Counter} from './Counter';
import {ButtonsCounter} from './CounterButtons';
import {AppStateType} from '../../redux/store';


export const CounterContainer: React.FC = () => {

    const settingsCounter = useSelector<AppStateType, SettingsCounterType>(state => state.settingsCounter)
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
    return (
        <CounterWrapper>
            <Table>
                <Counter
                    error={settingsCounter.error}
                    count={settingsCounter.count}
                    maxValueCount={settingsCounter.maxValueCount.valueCount}
                />
            </Table>
            <Btn>
                <ButtonsCounter
                    settingsCounter={settingsCounter}
                    countInc={countInc}
                    countDecrement={countDecrement}
                    countReset={countReset}
                />
            </Btn>
        </CounterWrapper>
    )
}
