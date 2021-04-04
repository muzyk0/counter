import React from 'react';
import {CounterContainer,} from './components/Counter/CounterContainer';
import {CounterSettingsContainer} from './components/SettingsCounter/CounterSettingsContainer';
import s from './App.module.css';

export function App() {
    return (
        <div className={s.App}>
            <CounterSettingsContainer />
            <CounterContainer/>
        </div>
    )
}

