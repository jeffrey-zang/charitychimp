import React from "react";

interface Context {
    charities: {
        name: string,
        description: string,
        helps: string,
    }[]
}

export const AppContext = React.createContext<Context>({charities: []})

export const AppContextProvider: React.FC<{children: React.ReactNode}> = ({children}) => {

    return (
        <AppContext.Provider value={{charities: []}}>{children}</AppContext.Provider>
    )
}