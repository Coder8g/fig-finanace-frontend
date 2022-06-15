import axios from '../../axiosUrl';
import * as actionTypes from './actionTypes';

export const setCategoriesData = (data) => {
    return {
        type: actionTypes.SET_CATEGORIES_DATA,
        data,
    }
}

export const setEventList = (data) => {
    return {
        type: actionTypes.SET_EVENT_LIST,
        data,
    }
}

export const getCategoriesData = () => {
    return dispatch => {
        return axios.get('/api/v1/categories', {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                dispatch(setCategoriesData(res.data.data.categories));
                return res.data.data.categories;
            }).catch(err => {
                console.log(err);
                return [];
            });
    }
}

export const getEventList = (filterString) => {
    return dispatch => {
        return axios.get(`/api/v1/events?${filterString}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                dispatch(setEventList(res.data.data.events));
                return res.data.data.events;
            }).catch(err => {
                console.log(err);
                return [];
            });
    }
}
