import * as types from './types'

export function updateSignUpModal(signupstate) {
    console.log("reaches here2 !!")
    return {
        type: types.SIGN_UP,
        signupstate
    };
}

export function updateSellModal(onsell) {
    return {
        type: types.BILLBOARD_SELL,
        onsell
    }
}