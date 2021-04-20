import {SettingsCounterType} from '../../redux/counter-reducer';
import React from 'react';
import {Button} from '../Button/Button';

type PropsType = {
    settingsCounter: SettingsCounterType
    countInc: () => void
    countDecrement: () => void
    countReset: () => void
}

    export const ButtonsCounter: React.FC<PropsType> = React.memo((props) => {
    const {
    settingsCounter,
    countInc,
    countDecrement,
    countReset
} = props


return (
    <React.Fragment>
        <Button
            title={'inc'}
            disabled={!!settingsCounter.error || settingsCounter.count >= settingsCounter.maxValueCount.valueCount}
            onClickHandler={countInc}
        />
        <Button
            title={'dec'}
            disabled={!!settingsCounter.error || settingsCounter.count <= settingsCounter.minValueCount.valueCount}
            onClickHandler={countDecrement}
        />
        <Button
            title={'reset'}
            disabled={!!settingsCounter.error || settingsCounter.count <= settingsCounter.minValueCount.valueCount}
            onClickHandler={countReset}
        />
    </React.Fragment>
)
})