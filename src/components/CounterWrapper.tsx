import React from 'react';
import s from './Counter/Counter.module.css';


export const CounterWrapper: React.FC = (props) => {
    return (
        <div className={s.CounterWrapper}>
            {props.children}
        </div>
    )
}
export const Table: React.FC = (props) => {
    return (
        <div className={s.counter}>
            {props.children}
        </div>

    )
}
export const Btn: React.FC = (props) => {
    return (
        <div className={s.buttons}>
            {props.children}
        </div>

    )
}