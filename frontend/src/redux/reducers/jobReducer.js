import{JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS, JOB_LOAD_FAIL, JOB_LOAD_RESET} from '../constants/jobconstant'

export const loadJobReducer = (state={jobs:[]}, action) =>{
    switch (action.type) {
        case JOB_LOAD_REQUEST:
            return {loading : true};

        case JOB_LOAD_SUCCESS:
            
            return {
                loading : false,
                success : action.payload.data.success,
                page : action.payload.data.page,
                pages : action.payload.data.pages,
                count : action.payload.data.count,
                setUniqueLocation : action.payload.data.setUniqueLocation,
                jobs : action.payload.data.jobs
            };
           
            
        case JOB_LOAD_FAIL:
            
            return {
                loading : false,
                error: action.payload
            };
            
        case JOB_LOAD_RESET:
             return {};
            
    
        default:
            return state;
    } 
}