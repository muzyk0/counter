import {combineReducers, createStore} from 'redux';
import {settingsCounterReducer} from './settings-counter-reducer';

const rootReducer = combineReducers({
    settingsCounter: settingsCounterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)