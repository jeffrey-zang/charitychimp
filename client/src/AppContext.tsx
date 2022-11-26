import React from "react";

export interface Charity {
    name: string,
    tagline: string,
    goal: number,
    current: number,
    tags: string[],
    verified: boolean,
    website?: string,
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
        {name: "Mummify Monkey Tank Fund", tagline: "We're preseving monkeys in tanks of buifluid for the future", goal: 50, current: 0, verified: false, tags: ["animals", "research"]},
        {name: "World Wildlife Fund", tagline: "For 60 years, WWF has worked to help people and nature thrive.\nAs the world’s leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.", goal: 150000000, current: 131614720, verified: true, website: "https://www.worldwildlife.org/", tags: ["animals", "international"]},
        {name: "Just Socks Foundation", tagline: "Providing NEW socks to homeless youth, adults and marginally housed individuals.", goal: 1000, current: 365, verified: true, website: "https://justsocks.ca/", tags: ["youth", "clothing"]},
        {name: "Ducks Unlimited", tagline: "Every day we find new opportunities to help conserve some of Canada’s most important habitats. With your support, we pursue research that looks at new ways to positively affect our environment, support education initiatives that empower future generations and invest in Canadian habitat conservation.", goal: 20000000, current: 18300000, verified: true, website: "https://www.ducks.ca/", tags: ["animals", "environment"]},
        {name: "Doctors without Borders", tagline: "Doctors Without Borders is an international humanitarian medical non-governmental organisation of French origin best known for its projects in conflict zones and in countries affected by endemic diseases.", goal: 150000, current: 69696, verified: true, website: "https://www.doctorswithoutborders.org/", tags: ["international", "healthcare"]}

    ])
    const addCharity = (charity: Charity) => {
        setCharities([...charities, charity])
    }

    const [user, setUser] = React.useState<User>()

    return (
        <AppContext.Provider value={{charities, setCharities, addCharity, user, setUser}}>{children}</AppContext.Provider>
    )
}