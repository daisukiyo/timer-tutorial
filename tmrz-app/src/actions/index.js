// An action creator is a function that returns an object with a type, and a payload when a value needs to accompany the action.


// this action will add a new timer object to an array of timer objects held by the store
export const addTimer = (name) => {
    return {
        type: NEW_TIMER, // why is this capitalized?
        payload: { name } // what does this do? 
    }
}

// this action starts or stops a timer
// this requires the index of a timer (is this to know which timer @soggybags?)
export const toggleTimer = (index) => {
    return {
        type: TOGGLE_TIMER,
        payload: { index }
    }
}

// this action selects a timer which will display details about that timer
// this requires the index of a timer

export const selectTimer = (index) => {
    return {
        type: SELECT_TIMER, 
        payload: { index }
    }
}


// this will export all actions
export const NEW_TIMER     = "NEW_TIMER"
export const TOGGLE_TIMER  = "TOGGLE_TIMER"
export const SELECT_TIMER  = "SELECT_TIMER"