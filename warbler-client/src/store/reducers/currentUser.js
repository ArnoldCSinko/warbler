import { SET_CURRENT_USER } from "../actionTypes";

const DEFAULT_STATE = {
    isAuthenticated: false, // True if user is logged in
    user: {} // All user info when logged in
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                // Turn into boolean false, or if keys exist, true
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            };
        default: 
            return state;
    }
}