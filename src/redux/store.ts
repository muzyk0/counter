import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../utils/localStorage';

const rootReducer = combineReducers({
    settingsCounter: counterReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer, loadState())


store.subscribe(() => {
    saveState({
        settingsCounter: store.getState().settingsCounter
    });
});
