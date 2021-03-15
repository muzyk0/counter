import React, {ChangeEvent} from 'react';
import {MAX_VALUE_COUNT, MIN_VALUE_COUNT, SettingsCounterType} from '../App';
import s from './CounterSettings.module.css';
import {Button} from './Button';

export type CounterTableProps = {
    setNewSettings: (id: string, value: number) => void
    settingsCounter: SettingsCounterType[]
    onChangeSetMinValue: (id: string, value: number) => void
    onChangeSetMaxValue: (id: string, value: number) => void
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
    setNewSettings: (id: string, value: number) => void
    settingsCounter: SettingsCounterType[]
    onChangeSetMinValue: (id: string, value: number) => void
    onChangeSetMaxValue: (id: string, value: number) => void
    setNewValue: () => void
    error: string
}

export const CounterSettings: React.FC<CounterSettingPropsType> = (props) => {

    return (
        <div className={s.CounterWrapper}>
            <CounterTable
                setNewSettings={props.setNewSettings}
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

/*    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const text = Number(e.currentTarget.value)
        props.onChangeSetMaxValue()
    }
    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const text = Number(e.currentTarget.value)
        props.onChangeSetMinValue(text, MIN_VALUE_COUNT)
    }*/

    const settingsEl = props.settingsCounter.map(set => {

        // const colorCount = props.count >= 4 ? s.error : ''


        const setNewSettings = (e: ChangeEvent<HTMLInputElement>) => {
            const num = Number(e.currentTarget.value)
            props.setNewSettings(set.id, num)
        }
        return (
            <div className={s.valueSettingWrapper} key={set.id}>
                <label>{set.title}</label>
                <input
                    type="number"
                    className={s.input}
                    value={set.valueCount}
                    onChange={setNewSettings}
                />
            </div>
        )
    })

    return (
        <div className={s.counter}>
            {/*<div className={s.valueSettingWrapper}>
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
            </div>*/}
            {settingsEl}
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