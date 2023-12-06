import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const Partners = createContext()

export const usePartnersContext = () => useContext(Partners)


 const PartnersProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <Partners.Provider value={[state, dispatch]}>
            {children}
        </Partners.Provider>
    )
}
export default PartnersProvider;
