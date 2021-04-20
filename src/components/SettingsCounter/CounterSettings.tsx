import React, {ChangeEvent, useCallback} from 'react';
import styles from './CounterSettings.module.css';
import {SettingsCounterType, valueInputType} from '../../redux/counter-reducer';

type PropsType = {
    settingsCounter: SettingsCounterType
    setNewSettings: (id: valueInputType, value: number) => void
}
export const CounterSettings: React.FC<PropsType> = React.memo((props) => {

    const {
        settingsCounter,
        setNewSettings
    } = props

    const setNewMaxSettings = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const num = e.currentTarget.valueAsNumber
        const datasetValue = e.currentTarget.dataset.value
        if (datasetValue) {
            // @ts-ignore todo
            setNewSettings(datasetValue, num)
        }
    }, [setNewSettings])
    // const setNewMinSettings = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    //     const num = e.currentTarget.valueAsNumber
    //     setNewSettings('minValueCount', num)
    // }, [setNewSettings])

    const errorStyle = `${styles.input} ${settingsCounter.error === 'Incorrect value!' && styles.errorInput}`

    return (
        <React.Fragment>
            <div className={styles.valueSettingWrapper}>
                <label>{settingsCounter.maxValueCount.title}</label>
                <input
                    data-value={'maxValueCount'}
                    type="number"
                    className={errorStyle}
                    value={settingsCounter.maxValueCount.valueCount}
                    onChange={setNewMaxSettings}
                />
            </div>
            <div className={styles.valueSettingWrapper}>
                <label>{settingsCounter.minValueCount.title}</label>
                <input
                    data-value={'minValueCount'}
                    type="number"
                    className={errorStyle}
                    value={settingsCounter.minValueCount.valueCount}
                    onChange={setNewMaxSettings}
                />
            </div>
        </React.Fragment>
    )
})