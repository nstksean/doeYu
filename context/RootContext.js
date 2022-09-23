
import { createContext, useReducer } from 'react'



const initialState = { count: 0, data: 324 };


// action type 
export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'


// reducer
function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1, data: action.payload };
        case DECREMENT:
            return { ...state, count: state.count - 1, data: action.payload };
        default:
            return state;
    }
}


export const RootContext = createContext(initialState);
RootContext.displayName = 'RootContext'

export function RootContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <RootContext.Provider value={{ state, dispatch }}>
            {children}
        </RootContext.Provider>

    )
}

