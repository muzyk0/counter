import React from 'react';
import s from './Counter.module.css';

type PropsType = {
    error: string
    count: number
    maxValueCount: number
}
export const Counter: React.FC<PropsType> = React.memo((props) => {
    const {
        error,
        count,
        maxValueCount
    } = props

    const colorCount = count >= maxValueCount ? s.error : ''
    const errorStyle = error === 'Incorrect value!' ? s.error : ''

    return (
        <React.Fragment>
            {error
                ? <p className={errorStyle}>{error}</p>
                : <h1 className={colorCount}>{count}</h1>
            }
        </React.Fragment>
    )
})