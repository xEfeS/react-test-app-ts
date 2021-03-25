import {UserAction, UserActionsTypes, userState} from "../../types/user";

const initialState: userState = {
    users: [],
    isLoading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): userState => {
    switch (action.type) {
        case UserActionsTypes.FETCH_USERS:
            return {isLoading: true, error: null, users: []}
        case UserActionsTypes.FETCH_USERS_SUCCESS:
            return {isLoading: false, error: null, users: action.payload}
        case UserActionsTypes.FETCH_USERS_ERROR:
            return {isLoading: false, error: action.payload, users: []}
        default:
            return state
    }
}