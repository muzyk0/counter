import React, {useCallback} from 'react';
import {CounterSettings} from './CounterSettings';
import {useDispatch, useSelector} from 'react-redux';
import {setCounterNewSetting, setCountNewValue, setError, SettingsCounterType} from '../../redux/counter-reducer';
import {Btn, CounterWrapper, Table} from '../CounterWrapper';
import {AppStateType} from '../../redux/store';
import {CounterSettingBtn} from './CounterSettingsButtons';

export type ButtonType = {
    disabled: boolean
    onClickHandler: () => void
    title: string
}

export const CounterSettingsContainer: React.FC = React.memo(() => {

    const settingsCounter = useSelector<AppStateType, SettingsCounterType>(state => state.settingsCounter)
    const dispatch = useDispatch()

    const setNewSettings = (id: 'maxValueCount' | 'minValueCount', value: number) => {
        switch (id) {
            case 'minValueCount':
                if (value < 0) {
                    dispatch(setError(`Incorrect value!`))
                } else if (value >= settingsCounter.maxValueCount.valueCount) {
                    dispatch(setError(`Incorrect value!`))
                } else {
                    dispatch(setError(`enter values and press 'set'`))
                }
                break
            case 'maxValueCount':
                if (value < 0) { // не нужно
                    dispatch(setError(`Incorrect value!`))
                } else if (value <= settingsCounter.minValueCount.valueCount) {
                    dispatch(setError(`Incorrect value!`))
                } else {
                    dispatch(setError(`enter values and press 'set'`))
                }
                break
            default:
                dispatch(setError(`enter values and press 'set'`))
        }
        dispatch(setCounterNewSetting(id, value))
    }

    const countSet = useCallback(() => {
        dispatch(setError(''))
        dispatch(setCountNewValue())
    }, [dispatch])

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
})

