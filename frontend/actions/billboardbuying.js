import * as types from './types'

export function onBillboardClick(screenstate) {
    console.log("reaches here3 !!")
    return {
        type: types.BILLBOARD_CLICK,
        screenstate
    };
}