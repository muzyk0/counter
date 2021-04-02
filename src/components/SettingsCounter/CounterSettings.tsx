import React from 'react';
import s from './CounterSettings.module.css';
import {Button} from '../Button/Button';

import {CounterSettingsTable} from './CounterSettingsTable';
import {ErrorType, SettingsCounterType} from '../../App';

export type ButtonType = {
    disabled: boolean
    onClickHandler: () => void
    title: string
}
export type CounterButtonsProps = {
    setNewValue: () => void
    error: ErrorType
}

export type CounterSettingPropsType = {
    setNewSettings: (id: 'maxValueCount' | 'minValueCount', value: number) => void
    settingsCounter: SettingsCounterType
    setNewValue: () => void
    error: ErrorType
    setError: (value: ErrorType) => void
}

export const CounterSettings: React.FC<CounterSettingPropsType> = (props) => {

    return (
        <div className={s.CounterWrapper}>
            <CounterSettingsTable
                setNewSettings={props.setNewSettings}
                settingsCounter={props.settingsCounter}
                setError={props.setError}
                error={props.error}
            />
            <CounterSettingBtn
                setNewValue={props.setNewValue}
                error={props.error}
            />
        </div>
    )
}

const CounterSettingBtn: React.FC<CounterButtonsProps> = (props) => {

    const disabledBtn = props.error === 'Incorrect value!'

    const countSet = () => {
        props.setNewValue()
    }

    return (
        <div className={s.buttons}>
            <Button disabled={disabledBtn} onClickHandler={countSet} title={'set'}/>
        </div>
    )
}