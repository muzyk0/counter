import React from 'react';
import s from './CounterSettings.module.css';
import {Button} from '../Button/Button';

import {CounterSettingsTable} from './CounterSettingsTable';
import {useDispatch} from 'react-redux';
import {ErrorType, setCountNewValue, setErrorAC, SettingsCounterType} from '../../redux/settings-counter-reducer';

export type ButtonType = {
    disabled: boolean
    onClickHandler: () => void
    title: string
}
export type CounterButtonsProps = {
    error: ErrorType
    setError: (value: ErrorType) => void
}

export type CounterSettingPropsType = {
    settingsCounter: SettingsCounterType
    error: ErrorType
    setError: (value: ErrorType) => void
}

export const CounterSettings: React.FC<CounterSettingPropsType> = (props) => {


    return (
        <div className={s.CounterWrapper}>
            <CounterSettingsTable
                settingsCounter={props.settingsCounter}
                setError={props.setError}
                error={props.error}
            />
            <CounterSettingBtn
                setError={props.setError}
                error={props.error}
            />
        </div>
    )
}

const CounterSettingBtn: React.FC<CounterButtonsProps> = (props) => {

    const dispatch = useDispatch()

    const countSet = () => {
        dispatch(setErrorAC(''))
        dispatch(setCountNewValue())
    }
    const disabledBtn = props.error === 'Incorrect value!'
    return (
        <div className={s.buttons}>
            <Button disabled={disabledBtn} onClickHandler={countSet} title={'set'}/>
        </div>
    )
}