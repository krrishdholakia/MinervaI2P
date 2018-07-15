import * as types from '../actions/types'

const initialState = {
    billboardClick: false,
}

console.log("reaches here2 !!")
export default function billboardclick(state = initialState, action) {
    console.log("reaches here !!")
    switch(action.type) {
        case types.BILLBOARD_CLICK:
            return Object.assign({}, state, {billboardClick: action.screenstate})
        default: 
            return state; 
    }
}