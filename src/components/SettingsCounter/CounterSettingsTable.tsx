import {setCounterNewSetting} from '../../redux/settings-counter-reducer';
import {ErrorType, SettingsCounterType} from '../../App';
import React, {ChangeEvent} from 'react';
import s from './CounterSettings.module.css';
import {useDispatch} from 'react-redux';

export type CounterTableProps = {
    setNewSettings: (id: 'maxValueCount' | 'minValueCount', value: number) => void
    settingsCounter: SettingsCounterType
    setError: (value: ErrorType) => void
    error: ErrorType
}
export const CounterSettingsTable: React.FC<CounterTableProps> = (props) => {

    const dispatch = useDispatch()

    if (props.settingsCounter.minValueCount) {
        if (props.settingsCounter.minValueCount.valueCount < 0) {
            props.setError(`Incorrect value!`)
        } else if (props.settingsCounter.minValueCount.valueCount >= props.settingsCounter.maxValueCount.valueCount) {
            props.setError(`Incorrect value!`)
        }
    }


    const setNewMaxSettings = (e: ChangeEvent<HTMLInputElement>) => {
        const num = e.currentTarget.valueAsNumber
        props.setNewSettings('maxValueCount', num)
        dispatch(setCounterNewSetting('maxValueCount', num))
    }
    const setNewMinSettings = (e: ChangeEvent<HTMLInputElement>) => {
        const num = e.currentTarget.valueAsNumber
        props.setNewSettings('minValueCount', num)
        dispatch(setCounterNewSetting('minValueCount', num))
    }

    const errorStyle = `${s.input} ${props.error === 'Incorrect value!' ? s.errorInput : ''}`

    return (
        <div className={s.counter}>
            <div className={s.valueSettingWrapper}>
                <label>{props.settingsCounter.maxValueCount.title}</label>
                <input
                    type="number"
                    className={errorStyle}
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