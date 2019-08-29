import { handleActions } from "redux-actions";
    import {GET_INFO,GET_INFO_SUCCESS,GET_INFO_FAILURE} from "../constants/actionType";
    const reducers = handleActions(
    {
    [GET_INFO]:(state,action)=>{
    console.log('GET_INFO',state,'action',action)
    return {
    x: action.payload.x
    };
    },
    [GET_INFO_SUCCESS]:(state,action)=>{
    console.log('GET_INFO_SUCCESS',state,'action',action)
    return {
    x: action.payload.x
    };
    },
    [GET_INFO_FAILURE]:(state,action)=>{
    console.log('GET_INFO_FAILURE',state,'action',action)
    return {
    x: action.payload.x
    };
    },