import { INCREASE, DECREASE } from "../actions";
import { createReducer } from '@reduxjs/toolkit';

const initState = 0;

export default createReducer(initState, {
    [INCREASE]: (state) => state + 1,

    [DECREASE]: (state) => state - 1
})

// const changeNumber = (state = 0, action) => {
//     switch (action.type) {
//         case INCREASE:
//             return state + 1;
//         case DECREASE:
//             return state - 1;
//         default:
//             return state;
//     }
// }

// export default changeNumber;