import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const Teams = createContext()

export const useTeamContext = () => useContext(Teams)


export const TeamProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <Teams.Provider value={[state, dispatch]}>
            {children}
        </Teams.Provider>
    )
}