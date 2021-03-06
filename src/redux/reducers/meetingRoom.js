
import { SET_MEETING_ROOM } from '../actionTypes';

const initialState = {
    value: '0'
};

export default function(state = initialState, action) {
    if (action.type === SET_MEETING_ROOM) {
        return { ...state, value: action.payload }
    }

    return state;
}