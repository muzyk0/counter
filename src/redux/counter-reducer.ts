export type SettingsType = {
    title: string
    valueCount: number
}
export type ErrorType = `enter values and press 'set'` | `Incorrect value!` | ``
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
        case 'SET-NEW-SETTINGS':
            return {
                ...state,
                [action.id]: {...state[action.id], valueCount: action.valueCount},
            }
        case 'COUNT-INC-VALUE':
            return {
                ...state,
                count: state.count + 1
            }
        case 'COUNT-DECREMENT-VALUE':
            return {
                ...state,
                count: state.count - 1
            }
        case 'RESET-COUNTER':
        case 'SET-COUNT-NEW-VALUE':
            return {
                ...state,
                count: state.minValueCount.valueCount,
            }
        case 'SET-ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export type CounterReducerActionType = ReturnType<typeof setCounterNewSettingAC>
    | ReturnType<typeof setCountIncValue>
    | ReturnType<typeof setCountDecrementValue>
    | ReturnType<typeof setCountResetValue>
    | ReturnType<typeof setCountNewValue>
    | ReturnType<typeof setErrorAC>

export const setCounterNewSettingAC = (id: 'maxValueCount' | 'minValueCount', value: number) => {
    return {type: 'SET-NEW-SETTINGS', id, valueCount: value} as const
}
export const setCountIncValue = () => {
    return {type: 'COUNT-INC-VALUE'} as const
}
export const setCountDecrementValue = () => {
    return {type: 'COUNT-DECREMENT-VALUE'} as const
}
export const setCountResetValue = () => {
    return {type: 'RESET-COUNTER'} as const
}
export const setCountNewValue = () => {
    return {type: 'SET-COUNT-NEW-VALUE'} as const
}
export const setErrorAC = (error: ErrorType) => {
    return {type: 'SET-ERROR', error} as const
}