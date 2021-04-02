export type SettingsType = {
    title: string
    valueCount: number
}
export type SettingsCounterType = {
    count: number
    maxValueCount: SettingsType
    minValueCount: SettingsType
}

const InitialState = {
    count: 0,
    maxValueCount: {title: 'max value', valueCount: 5},
    minValueCount: {title: 'min value', valueCount: 0}
}


export const settingsCounterReducer = (state: SettingsCounterType = InitialState, action: CounterReducerActionType): SettingsCounterType => {
    switch (action.type) {
        case 'SET-NEW-SETTINGS': {
            return {
                ...state,
                [action.id]: {...state[action.id], valueCount: action.valueCount}
            }
        }
        case 'SET-COUNT-INC-VALUE': {
            return {
                ...state,
                count: state.count+1
            }
        }
        case 'SET-COUNT-RESET-VALUE': {
            return {
                ...state,
                count: state.minValueCount.valueCount
            }
        }
        default:
            return state
    }
}

export type CounterReducerActionType = ReturnType<typeof setCounterNewSetting>
    | ReturnType<typeof setCountIncValue>
    | ReturnType<typeof setCountResetValue>

export const setCounterNewSetting = (id: 'maxValueCount' | 'minValueCount', value: number) => {
    return {type: 'SET-NEW-SETTINGS', id, valueCount: value} as const
}
export const setCountIncValue = () => {
    return {type: 'SET-COUNT-INC-VALUE'} as const
}
export const setCountResetValue = () => {
    return {type: 'SET-COUNT-RESET-VALUE'} as const
}