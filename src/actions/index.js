
import axios from 'axios';
import { normalize } from 'normalizr';
import * as schema from './schema';
import { actionTypes } from "../constants";

const headerConfig = {
    headers: {
        "Content-Type": "application/json",
        "user-key": "78ec888b2af6d738adb748c6ded6a089"
    }
};
export function fetchInitialDataSuccess(data) {
    console.log(data)

    // console.log(normalize(data.collections,schema.normalizedapi))
    return {
        type: actionTypes.FETCH_SUCCESS,
        data: data
    }
}
export function fetchInitialDataRequest() {
    return {
        type: actionTypes.FETCH_REQUEST,
    }
}
export function fetchInitialDataFail(data) {
    return {
        type: actionTypes.FETCH_FAIL,
        data: data
    }
}


export function fetchInitialData() {
    return dispatch => {
        dispatch(fetchInitialDataRequest());
        return axios.get(`https://developers.zomato.com/api/v2.1/collections?city_id=1`, headerConfig)
            .then(response => {
                if (response.status === 200) {
                    return dispatch(fetchInitialDataSuccess(response.data))
                }
            })
            .catch(err => {
                return dispatch(fetchInitialDataFail(err.response))
            });
    };
}