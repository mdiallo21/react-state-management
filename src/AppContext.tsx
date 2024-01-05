import {User} from "./api/authenticate";
import React, {createContext, ReactNode, useContext, useReducer} from "react";

type State = {
    user: undefined | User,
    permissions: undefined | string [],
    loading: boolean,
}

type Action = |{
    type: "authenticate",
}
    | {
    type: "authenticated",
    user: User | undefined,
}
    | {
    type: "authorize",
}
    |{
    type: "authorized",
    permissions: string[],
}

type AppContextType = State & {
    dispatch: React.Dispatch<Action>,
}

type Props = {
    children: ReactNode;
}
function reducer(state: State, action: Action): State {
    switch (action.type){
        case "authenticate":
            return {...state, loading: true};
        case "authenticated":
            return {...state, loading: false, user: action.user};
        case "authorize":
            return {...state, loading: true}
        case "authorized":
            return {
                ...state,
                loading: false,
                permissions: action.permissions,
            };
        default:
            return state;
    }
}

const initialState: State = {
    user: undefined,
    permissions: undefined,
    loading: false,
}

const AppContext = createContext<AppContextType>({
    ...initialState,
    dispatch: () => {}
});

export const AppProvider = ({children}: Props) =>{
    const [{user, permissions, loading}, dispatch] =
        useReducer(reducer, initialState);
    return(
        <AppContext.Provider value={{user, permissions, loading, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);

