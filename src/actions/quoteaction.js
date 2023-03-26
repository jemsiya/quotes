import axios from 'axios'
import constants, { R_FAIL, R_SUCCESS } from '../constants/quotesconst'

export const quotelist=()=>async (dispatch)=>{
    try{
        const data = await axios.get('https://type.fit/api/quotes') 
        console.log(data);
        dispatch({
            type:R_SUCCESS,
            payload:data
        })
    }

   catch(error){
    dispatch({
        type:R_FAIL,
        error:error
    })
   }
}