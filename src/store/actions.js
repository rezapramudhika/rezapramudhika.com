import { NAVBAR_TITLE } from './actionsType';

export const getTitle = (payload) => {
    return {
        type: NAVBAR_TITLE,
        payload
    }
}