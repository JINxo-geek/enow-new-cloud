import { handleActions } from "redux-actions";
    import {GET_HISTORY,GET_HISTORY_SUCCESS,GET_HISTORY_FAILURE} from "../constants/actionType";
    const reducers = handleActions(
    {
    [GET_HISTORY]:(state,action)=>{
    console.log('GET_HISTORY',state,'action',action)
    return {
    x: action.payload.x
    };
    },
    [GET_HISTORY_SUCCESS]:(state,action)=>{
    console.log('GET_HISTORY_SUCCESS',state,'action',action)
    return {
    x: action.payload.x
    };
    },
    [GET_HISTORY_FAILURE]:(state,action)=>{
    console.log('GET_HISTORY_FAILURE',state,'action',action)
    return {
    x: action.payload.x
    };
    },