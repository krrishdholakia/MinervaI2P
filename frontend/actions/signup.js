import * as types from './types'

// export function signUpModal(signupstate) {
//     console.log("reaches here2 !!")
//     return {
//         type: types.SIGN_UP,
//         signupstate
//     };
// }

export function signout(signoutstate) {
    console.log("reaches here2 !!")
    return {
        type: types.SIGN_OUT, 
        signoutstate
    }
}