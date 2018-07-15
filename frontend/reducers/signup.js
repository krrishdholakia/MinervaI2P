import * as types from '../actions/types'

const initialState = {
    signUp: false,
    onsell: false
}

console.log("reaches here !!")
export function signup(state = initialState, action) {
    console.log("reaches here !!")
    switch(action.type) {
        case types.SIGN_UP:
            return Object.assign({}, state, {signUp: action.signupstate})
        default: 
            return state; 
    }
}

export default function onsell(state = initialState, action) {
    switch(action.type) {
        case types.BILLBOARD_SELL:
            return Object.assign({}, state, {onsell: action.onsell})
        default: 
            return state; 
    }
}