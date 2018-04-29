import { NAVBAR_TITLE, SUCCESS_SAVE_MSG, LOADING, ERROR } from './actionsType';

const initialState = {
    loading: false,
    error: false,
    navbarTitle: 'About'
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case NAVBAR_TITLE:
            return {
                ...state,
                navbarTitle: action.payload
            }
        case SUCCESS_SAVE_MSG:
            return {
                ...state,
                loading: false,
                error: false
            }
        case LOADING:
            return {
                ...state,
                loading: true,
                error: false
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}

export default reducers;
