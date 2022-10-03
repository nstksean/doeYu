
import { createContext, useReducer, useEffect } from 'react'
// import { getrustUrl } from '../api/apiClient';
import { getScenicSpotUrl } from "../api/apiClient"

const initialState = {
    rustAPI: {
        data: null,
        isLoaded: false,
        error: null
    },
    rustAPI_data: null,
    rustAPI_isLoaded: false,
    rustAPI_error: null

};


// action type 
export const rust_DATA = 'rust_DATA'
export const rust_LOAD = 'rust_LOAD'
export const rust_ERROR = 'rust_ERROR'


// reducer
function reducer(state, action) {
    switch (action.type) {
        case rust_DATA:
            return { ...state, rustAPI_data: action.payload };
        case rust_LOAD:
            return { ...state, rustAPI_isLoaded: action.payload, };
        case rust_ERROR:
            return { ...state, rustAPI_error: action.payload };
        default:
            return state;
    }
}


export const RootContext = createContext(initialState);
RootContext.displayName = 'RootContext'

export function RootContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState);

    const query = ({
        $filter: `contains(Address,'三重')`,
        $top: '12',
        $format: 'JSON'
    })
    const rustUrl = getScenicSpotUrl('NewTaipei', query)

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(rustUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    // setIsLoaded(true);
                    // setItems(result);
                    dispatch({ type: rust_LOAD, payload: true })
                    dispatch({ type: rust_DATA, payload: result })
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                    dispatch({ type: rust_LOAD, payload: true })
                    dispatch({ type: rust_ERROR, payload: error })
                }
            )
    }, [])

    return (
        <RootContext.Provider value={{ state, dispatch }}>
            {children}
        </RootContext.Provider>

    )
}

