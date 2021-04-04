import React, {ChangeEvent} from 'react';
import styles from './CounterSettings.module.css';
import {SettingsCounterType} from '../../redux/counter-reducer';

type PropsType = {
    settingsCounter: SettingsCounterType
    setNewSettings: (id: 'maxValueCount' | 'minValueCount', value: number) => void
}
export const CounterSettings: React.FC<PropsType> = (props) => {

    const {
        settingsCounter,
        setNewSettings
    } = props

    const setNewMaxSettings = (e: ChangeEvent<HTMLInputElement>) => {
        const num = e.currentTarget.valueAsNumber
        setNewSettings('maxValueCount', num)
    }
    const setNewMinSettings = (e: ChangeEvent<HTMLInputElement>) => {
        const num = e.currentTarget.valueAsNumber
        setNewSettings('minValueCount', num)
    }

    const errorStyle = `${styles.input} ${settingsCounter.error === 'Incorrect value!' && styles.errorInput}`

    return (
        <React.Fragment>
            <div className={styles.valueSettingWrapper}>
                <label>{settingsCounter.maxValueCount.title}</label>
                <input
                    type="number"
                    className={errorStyle}
                    value={settingsCounter.maxValueCount.valueCount}
                    onChange={setNewMaxSettings}
                />
            </div>
            <div className={styles.valueSettingWrapper}>
                <label>{settingsCounter.minValueCount.title}</label>
                <input
                    type="number"
                    className={errorStyle}
                    value={settingsCounter.minValueCount.valueCount}
                    onChange={setNewMinSettings}
                />
            </div>
        </React.Fragment>
    )
}