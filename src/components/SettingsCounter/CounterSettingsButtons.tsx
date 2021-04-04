import {ErrorType} from '../../redux/counter-reducer';
import React from 'react';
import {Button} from '../Button/Button';

export type CounterButtonsProps = {
    error: ErrorType
    countSet: () => void
}
export const CounterSettingBtn: React.FC<CounterButtonsProps> = (props) => {

    const {
        error,
        countSet
    } = props

    const disabledBtn = error === 'Incorrect value!'
    return (
        <>
            <Button disabled={disabledBtn} onClickHandler={countSet} title={'set'}/>
        </>
    )
}