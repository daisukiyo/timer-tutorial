// helper function that turns an object whose values are different reducing functions
// into  a single reducting function you can pass
import { combineReducers } from 'redux';

import timerReducer from './timers-reducer';
import selectTimerReducer from './select-timer-reducer';

export default combineReducers({
    timers: timerReducer,               // array
    selectedTimer: selectTimerReducer,  // int/number
});

