import React, {createContext, useReducer} from "react";
import {AuthReducer} from './reducer'


const initialState = {
    user: {},
    token: null
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;
