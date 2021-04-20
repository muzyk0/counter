import React from 'react';
import s from './CounterWrapper.module.css';


export const CounterWrapper: React.FC = React.memo((props) => {
    return (
        <div className={s.CounterWrapper}>
            {props.children}
        </div>
    )
})
export const Table: React.FC = React.memo((props) => {
    return (
        <div className={s.counter}>
            {props.children}
        </div>

    )
})
export const Btn: React.FC = React.memo((props) => {
    return (
        <div className={s.buttons}>
            {props.children}
        </div>

    )
})