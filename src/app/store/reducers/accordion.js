import { OPEN_ACCORDION } from "../constants/accordion";

const initState = {
    isOpen: false
}

export const accordionReducer = (state = initState, action) => {
    switch (action.type) {
        case OPEN_ACCORDION: {
            return { ...state, isOpen: !state.isOpen }
        }
        default: return state;
    }
}