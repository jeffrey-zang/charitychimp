import React from "react";

interface Charity {
    name: string,
    description: string,
    helps: string,
    documents: URL,
}

interface User {
    username: string,
    description: string,
    balance: number,
    pfp: string
}

interface Context {
    charities: Charity[],
    setCharities: React.Dispatch<React.SetStateAction<Charity[]>>,
    addCharity: (charity: Charity) => void,
    user: User | undefined,
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
}

export const AppContext = React.createContext<Context>({
    charities: [], 
    setCharities: () => {}, 
    addCharity: () => {}, 
    user: undefined,
    setUser: () => {},
})

export const AppContextProvider: React.FC<{children: React.ReactNode|React.ReactNode[]}> = ({children}) => {
    const [charities, setCharities] = React.useState<Charity[]>([])
    const addCharity = (charity: Charity) => {
        setCharities([...charities, charity])
    }

    const [user, setUser] = React.useState<User>({})

    return (
        <AppContext.Provider value={{charities, setCharities, addCharity, user, setUser}}>{children}</AppContext.Provider>
    )
}