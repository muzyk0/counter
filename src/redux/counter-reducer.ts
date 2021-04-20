export enum ACTION_TYPE {
    SET_NEW_SETTINGS = 'SET_NEW_SETTINGS',
    COUNT_INC_VALUE = 'COUNT_INC_VALUE',
    COUNT_DECREMENT_VALUE = 'COUNT_DECREMENT_VALUE',
    RESET_COUNTER = 'RESET_COUNTER',
    SET_COUNT_NEW_VALUE = 'SET_COUNT_NEW_VALUE',
    SET_ERROR = 'SET_ERROR',
}
export type SettingsType = {
    title: string
    valueCount: number
}
export type ErrorType = `enter values and press 'set'` | `Incorrect value!` | ``
export type valueInputType = 'maxValueCount' | 'minValueCount'
export type SettingsCounterType = {
    count: number
    error: ErrorType
    maxValueCount: SettingsType
    minValueCount: SettingsType
}

const InitialState = {
    count: 0,
    error: `enter values and press 'set'`,
    maxValueCount: {title: 'max value', valueCount: 5},
    minValueCount: {title: 'min value', valueCount: 0}
} as const


export const counterReducer = (state: SettingsCounterType = InitialState, action: CounterReducerActionType): SettingsCounterType => {
    switch (action.type) {
        case ACTION_TYPE.SET_NEW_SETTINGS:
            return {
                ...state,
                [action.id]: {...state[action.id], valueCount: action.valueCount},
            }
        case ACTION_TYPE.COUNT_INC_VALUE:
            return {
                ...state,
                count: state.count + 1
            }
        case ACTION_TYPE.COUNT_DECREMENT_VALUE:
            return {
                ...state,
                count: state.count - 1
            }
        case ACTION_TYPE.RESET_COUNTER:
        case ACTION_TYPE.SET_COUNT_NEW_VALUE:
            return {
                ...state,
                count: state.minValueCount.valueCount,
            }
        case ACTION_TYPE.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export type CounterReducerActionType = ReturnType<typeof setCounterNewSetting>
    | ReturnType<typeof setCountIncValue>
    | ReturnType<typeof setCountDecrementValue>
    | ReturnType<typeof setCountResetValue>
    | ReturnType<typeof setCountNewValue>
    | ReturnType<typeof setError>

export const setCounterNewSetting = (id: valueInputType, value: number) => {
    return {type: ACTION_TYPE.SET_NEW_SETTINGS, id, valueCount: value} as const
}
export const setCountIncValue = () => {
    return {type: ACTION_TYPE.COUNT_INC_VALUE} as const
}
export const setCountDecrementValue = () => {
    return {type: ACTION_TYPE.COUNT_DECREMENT_VALUE} as const
}
export const setCountResetValue = () => {
    return {type: ACTION_TYPE.RESET_COUNTER} as const
}
export const setCountNewValue = () => {
    return {type: ACTION_TYPE.SET_COUNT_NEW_VALUE} as const
}
export const setError = (error: ErrorType) => {
    return {type: ACTION_TYPE.SET_ERROR, error} as const
}