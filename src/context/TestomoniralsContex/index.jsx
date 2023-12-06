import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const Testomonirals = createContext()

export const useTestomoniralsContext = () => useContext(Testomonirals)


export const TestomoniralsProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <Testomonirals.Provider value={[state, dispatch]}>
            {children}
        </Testomonirals.Provider>
    )
}