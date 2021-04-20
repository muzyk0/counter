import s from './Button.module.css';
import React from 'react';

export type ButtonType = {
    disabled: boolean
    onClickHandler: () => void
    title: string
}
export const Button = React.memo((props: ButtonType) => {
    return <button disabled={props.disabled}
                   className={`${s.btn}`}
                   onClick={props.onClickHandler}>{props.title}</button>
})