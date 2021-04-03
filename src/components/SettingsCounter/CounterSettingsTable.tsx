import React, {ChangeEvent} from 'react';
import s from './CounterSettings.module.css';
import {ErrorType, setCounterNewSettingAC, SettingsCounterType} from '../../redux/settings-counter-reducer';
import {useDispatch} from 'react-redux';

export type CounterTableProps = {
    settingsCounter: SettingsCounterType
    error: ErrorType
    setError: (value: ErrorType) => void
}
export const CounterSettingsTable: React.FC<CounterTableProps> = (props) => {
    // if (props.settingsCounter.minValueCount.valueCount < 0) {
    //     props.setError(`Incorrect value!`)
    // } else if (props.settingsCounter.minValueCount.valueCount >= props.settingsCounter.maxValueCount.valueCount) {
    //     props.setError(`Incorrect value!`)
    // }


    const dispatch = useDispatch()

    const setNewSettings = (id: 'maxValueCount' | 'minValueCount', value: number) => {
        switch (id) {
            case 'minValueCount': {
                if (value < 0) {
                    props.setError(`Incorrect value!`)
                } else if (value >= props.settingsCounter.maxValueCount.valueCount) {
                    props.setError(`Incorrect value!`)
                } else {
                    props.setError(`enter values and press 'set'`)
                }
                break
            }
            case 'maxValueCount': {
                if (value < 0) { // не нужно
                    props.setError(`Incorrect value!`)
                } else if (value <= props.settingsCounter.minValueCount.valueCount) {
                    props.setError(`Incorrect value!`)
                } else {
                    props.setError(`enter values and press 'set'`)
                }
                break
            }
            default:
                props.setError(`enter values and press 'set'`)
        }
        dispatch(setCounterNewSettingAC(id, value))
    }

    const setNewMaxSettings = (e: ChangeEvent<HTMLInputElement>) => {
        const num = e.currentTarget.valueAsNumber
        setNewSettings('maxValueCount', num)
    }
    const setNewMinSettings = (e: ChangeEvent<HTMLInputElement>) => {
        const num = e.currentTarget.valueAsNumber
        setNewSettings('minValueCount', num)
    }

    const errorStyle = `${s.input} ${props.error === 'Incorrect value!' && s.errorInput}`

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