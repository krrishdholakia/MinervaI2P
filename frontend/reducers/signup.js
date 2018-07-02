import * as types from '../actions/types'

const initialState = {
    signUp: false,
    signout: undefined
}

console.log("reaches here !!")
// export default function signup(state = initialState, action) {
//     console.log("reaches here !!")
//     switch(action.type) {
//         case types.SIGN_UP:
//             return Object.assign({}, state, {signUp: action.signupstate})
//         default: 
//             return state; 
//     }
// }

function testfunc(state = initialState, action) {
    console.log("Action:" + action)
    return Object.assign({}, state, {signout: action.signoutstate})
    // switch(action.type) {
    //     case types.SIGN_OUT:
    //         return Object.assign({}, state, {signout: action.signoutstate})
    //     default: 
    //         return state; 
    // }
}

export default testfunc;