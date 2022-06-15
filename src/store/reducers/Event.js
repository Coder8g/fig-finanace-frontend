import * as actionType from '../actions/actionTypes';

const initialState={
    categoryData: [],
    eventList: [],
}

const setCategoriesData = (state, action) => {
    return {
        ...state,
        categoryData: action.data,
    }
}

const setEventList = (state, action) => {
    return {
        ...state,
        eventList: action.data,
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type){
        case actionType.SET_CATEGORIES_DATA:
            return setCategoriesData(state, action);
        case actionType.SET_EVENT_LIST:
            return setEventList(state, action);
        default:
            return state
    }
}

export default reducer;