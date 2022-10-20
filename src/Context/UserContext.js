import { createContext, useContext, useEffect, useState } from "react"


const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
}


export function UserProvider ({ children }) {
    
    //State

    const [user, setUser] = useState({});

    useEffect(() =>{
        console.log(user)
    }, [user]) 

    //Constant
    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={ state }>
                { children }
        </UserContext.Provider>
    )
}