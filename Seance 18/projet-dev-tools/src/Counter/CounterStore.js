

export const INCREMENTER='INCREMENTER'
export const INCREMENTER_By_AMOUNT='INCREMENTER_By_AMOUNT'
export const DECREMENTER='DECREMENTER'
export const DECREMENTER_By_AMOUNT='DECREMENTER_By_AMOUNT'
export const SAVE_COUNTER='SAVE_COUNTER'
export function incrementer(){
    return {type:INCREMENTER}
}
export function decrementer(){
    return{type:DECREMENTER}
}
export function incrementerByAmount(amount){
    return{
        type:INCREMENTER_By_AMOUNT,
        payload:{amount:amount}

    }
}
export function saveHistoriqueCounter(count,info){
    return{
        type:SAVE_COUNTER,
        payload:{info:info,count:count}
    }
}


export function decrementerByAmount(amount){
    return{
        type:DECREMENTER_By_AMOUNT,
        payload:{amount:amount}

    }
}


const initialState = {
    value: 0,
    hisoriqueCounter: [],
  };
export default function  reducer(state=initialState,action){
switch(action.type){
case INCREMENTER:
    return {...state,value:state.value+1}
case DECREMENTER:
    return {...state,value:state.value-1}
case INCREMENTER_By_AMOUNT:
        return {...state,value:state.value+action.payload.amount}
    
case DECREMENTER_By_AMOUNT:
        return {...state,value:state.value-action.payload.amount}
case SAVE_COUNTER:
    return {...state,hisoriqueCounter:[...state.hisoriqueCounter,{info:action.payload.info,count:action.payload.count}]}
            
default:
    return state
}
}