import { R_FAIL,R_SUCCESS } from "../constants/quotesconst";

export const quotelistreducer =  (state={listquotes:[]},action)=>{
    
    switch(action.type){
        case R_SUCCESS:
            return{
                listquotes:action.payload
            }
            case R_FAIL:
                return{
                    listquotes:action.error
                }
                default:
                   return state
    }
}