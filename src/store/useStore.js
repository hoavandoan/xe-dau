import React, {createContext, useReducer, useContext} from 'react';
import {userActions, userInitialState} from './userActions';

const initialState = {
    ...userInitialState,
};


const StoreContext = createContext(initialState);

const Actions = {
    ...userActions,
};

const reducer = (state, action) => {
    const act = Actions[action.type];
    const update = act(state, action);
    return {...state, ...update};
};

export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={{state, dispatch}}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = store => {
    const {state, dispatch} = useContext(StoreContext);
    return {state, dispatch};
};
