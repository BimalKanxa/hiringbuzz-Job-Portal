import { JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS } from "../constants/jobconstant"
import { JOB_LOAD_SINGLE_FAIL, JOB_LOAD_SINGLE_REQUEST, JOB_LOAD_SINGLE_SUCCESS } from "../constants/jobconstant"

import axios from 'axios'

export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: JOB_LOAD_REQUEST });
    try {
        const data = await axios.get(`/api/jobs/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`)
        // console.log(data.data.jobs)

        dispatch({
            type: JOB_LOAD_SUCCESS,
            payload: data,
        });
        // console.log(data)
    } catch (error) {
        dispatch({
            type: JOB_LOAD_FAIL,
            payload: error.response.data.error
        });
    }
}

//job load single action

export const jobLoadSingleAction = (id) => async (dispatch) => {
    dispatch({ type: JOB_LOAD_SINGLE_REQUEST });
    try {
        const data = await axios.get(`/api/job/${id}`)
        // console.log(data.data.jobs)
       

        dispatch({
            type: JOB_LOAD_SINGLE_SUCCESS,
            payload: data,
        });
        // console.log(data)
    } catch (error) {
        dispatch({
            type: JOB_LOAD_SINGLE_FAIL,
            payload: error.response.data.error
        });
    }
}