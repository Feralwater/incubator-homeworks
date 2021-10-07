import {UserType} from "../HW8";

type ActionType = {
    type: "SORT" | "CHECK"
    payload: string | number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case 'SORT': {
            return [...state].sort((a, b) =>
                a.name > b.name ? action.payload === "up" ? 1 : -1 : action.payload === "up" ? -1 : 1)
        }
        case 'CHECK': {
            return state.filter((u) => u.age >= action.payload)
        }
        default:
            return state
    }
}