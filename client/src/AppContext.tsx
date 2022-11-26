import React from "react";

export interface Charity {
    name: string,
    tagline: string,
    goal: number,
    current: number,
    thumbnailUrl?: string,
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
    const [charities, setCharities] = React.useState<Charity[]>([
        {name: "Mummify Monkey Tank Fund", tagline: "We're preseving monkeys in tanks of buifluid for the future", goal: 50, current: 13},
        {name: "World Wildlife Fund", tagline: "For 60 years, WWF has worked to help people and nature thrive.\nAs the world’s leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.", goal: 150000000, current: 131614720},
    ])
    const addCharity = (charity: Charity) => {
        setCharities([...charities, charity])
    }

    const [user, setUser] = React.useState<User>()

    return (
        <AppContext.Provider value={{charities, setCharities, addCharity, user, setUser}}>{children}</AppContext.Provider>
    )
}