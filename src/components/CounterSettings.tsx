import React, {ChangeEvent} from 'react';
import {MAX_VALUE_COUNT, MIN_VALUE_COUNT, SettingsCounterType} from '../App';
import s from './CounterSettings.module.css';
import {Button} from './Button';

export type CounterTableProps = {
    settingsCounter: SettingsCounterType
    onChangeSetMinValue: (value: number, func: string) => void
    onChangeSetMaxValue: (value: number, func: string) => void
}
export type ButtonType = {
    disabled: boolean
    onClickHandler: () => void
    title: string
}
export type CounterButtonsProps = {
    setNewValue: () => void
    error: string
}

export type CounterSettingPropsType = {
    settingsCounter: SettingsCounterType
    onChangeSetMinValue: (value: number, func: string) => void
    onChangeSetMaxValue: (value: number, func: string) => void
    setNewValue: () => void
    error: string
}

export const CounterSettings: React.FC<CounterSettingPropsType> = (props) => {

    return (
        <div className={s.CounterWrapper}>
            <CounterTable
                settingsCounter={props.settingsCounter}
                onChangeSetMinValue={props.onChangeSetMinValue}
                onChangeSetMaxValue={props.onChangeSetMaxValue}
            />
            <CounterSettingBtn
                setNewValue={props.setNewValue}
                error={props.error}
            />
        </div>
    )
}

const CounterTable: React.FC<CounterTableProps> = (props) => {
    // const colorCount = props.count >= 4 ? s.error : ''

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const text = Number(e.currentTarget.value)
        props.onChangeSetMaxValue(text, MAX_VALUE_COUNT)
    }
    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const text = Number(e.currentTarget.value)
        props.onChangeSetMinValue(text, MIN_VALUE_COUNT)
    }

    return (
        <div className={s.counter}>
            <div className={s.valueSettingWrapper}>
                <label>max value:</label>
                <input
                    type="number"
                    className={`${s.input}`}
                    value={props.settingsCounter.maxValueCount}
                    onChange={setMaxValue}
                />
            </div>
            <div className={s.valueSettingWrapper}>
                <label>min value:</label>
                <input
                    type="number"
                    className={`${s.input}`}
                    value={props.settingsCounter.minValueCount}
                    onChange={setMinValue}
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