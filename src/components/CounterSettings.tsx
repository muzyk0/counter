import React, {ChangeEvent} from 'react';
import {ErrorType, SettingsCounterType} from '../App';
import s from './CounterSettings.module.css';
import {Button} from './Button';

export type CounterTableProps = {
    setNewSettings: (id: 'maxValueCount' | 'minValueCount', value: number) => void
    settingsCounter: SettingsCounterType
    setError: (value: ErrorType) => void
    error: ErrorType
}
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
            <CounterTable
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

const CounterTable: React.FC<CounterTableProps> = (props) => {

    if (props.settingsCounter.minValueCount) {
        if (props.settingsCounter.minValueCount.valueCount < 0) {
            props.setError(`Incorrect value!`)
        } else if (props.settingsCounter.minValueCount.valueCount >= props.settingsCounter.maxValueCount.valueCount) {
            props.setError(`Incorrect value!`)
        }
    }


    const setNewMaxSettings = (e: ChangeEvent<HTMLInputElement>) => {
        const num = Number(e.currentTarget.value)
        props.setNewSettings('maxValueCount', num)
    }
    const setNewMinSettings = (e: ChangeEvent<HTMLInputElement>) => {
        const num = Number(e.currentTarget.value)
        props.setNewSettings('minValueCount', num)
    }

    const errorStyle = `${s.input} ${props.error === 'Incorrect value!' ? s.errorInput : ''}`

    return (
        <div className={s.counter}>
            <div className={s.valueSettingWrapper}>
                <label>{props.settingsCounter.maxValueCount.title}</label>
                <input
                    type="number"
                    className={ errorStyle }
                    value={props.settingsCounter.maxValueCount.valueCount}
                    onChange={setNewMaxSettings}
                />
            </div>
            <div className={s.valueSettingWrapper}>
                <label>{props.settingsCounter.minValueCount.title}</label>
                <input
                    type="number"
                    className={errorStyle}
                    value={props.settingsCounter.minValueCount.valueCount}
                    onChange={setNewMinSettings}
                />
            </div>
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