import React from 'react';
import {CounterSettings} from './CounterSettings';
import {useDispatch, useSelector} from 'react-redux';
import {
    ErrorType,
    setCounterNewSettingAC,
    setCountNewValue,
    setErrorAC,
    SettingsCounterType
} from '../../redux/counter-reducer';
import {Btn, CounterWrapper, Table} from '../CounterWrapper';
import {AppStateType} from '../../redux/store';
import {CounterSettingBtn} from './CounterSettingsButtons';

export type ButtonType = {
    disabled: boolean
    onClickHandler: () => void
    title: string
}

export const CounterSettingsContainer: React.FC = () => {

    const settingsCounter = useSelector<AppStateType, SettingsCounterType>(state => state.settingsCounter)
    const dispatch = useDispatch()

    const setNewSettings = (id: 'maxValueCount' | 'minValueCount', value: number) => {
        switch (id) {
            case 'minValueCount': {
                if (value < 0) {
                    setError(`Incorrect value!`)
                } else if (value >= settingsCounter.maxValueCount.valueCount) {
                    setError(`Incorrect value!`)
                } else {
                    setError(`enter values and press 'set'`)
                }
                break
            }
            case 'maxValueCount': {
                if (value < 0) { // не нужно
                    setError(`Incorrect value!`)
                } else if (value <= settingsCounter.minValueCount.valueCount) {
                    setError(`Incorrect value!`)
                } else {
                    setError(`enter values and press 'set'`)
                }
                break
            }
            default:
                setError(`enter values and press 'set'`)
        }
        dispatch(setCounterNewSettingAC(id, value))
    }

    const setError = (value: ErrorType) => {
        dispatch(setErrorAC(value))
    }

    const countSet = () => {
        dispatch(setErrorAC(''))
        dispatch(setCountNewValue())
    }

    return (
    <CounterWrapper>
        <Table>
            <CounterSettings
                settingsCounter={settingsCounter}
                setNewSettings={setNewSettings}
            />
        </Table>
        <Btn>
            <CounterSettingBtn
                countSet={countSet}
                error={settingsCounter.error}
            />
        </Btn>
    </CounterWrapper>
    )
}

