import { createAction } from '@reduxjs/toolkit';

export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

// export function increaseAction(){
//     return {
//         type:INCREASE,
//         preload:'increase'
//     }
// }


// export function decreaseAction(){
//     return {
//         type:DECREASE,
//         preload:'decrease'
//     }
// }

export const increaseAction = createAction(INCREASE);

export const decreaseAction = createAction(DECREASE);