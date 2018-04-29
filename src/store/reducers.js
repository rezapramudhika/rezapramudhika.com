import { NAVBAR_TITLE } from './actionsType';

const initialState = {
    navbarTitle: 'About'
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case NAVBAR_TITLE:
            return { 
                ...state,
                navbarTitle: action.payload
            }
        default:
            return state;
    }
}

export default reducers;
