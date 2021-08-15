import React, { useState } from 'react'

export const UserContext = React.createContext()

export default function UserProvider(props) {


    const initState = {

        
        token: localStorage.getItem('id_token') || undefined,
        username: ""

    }

    const [ userState, setUserState ] = useState(initState)

    let updateToken = (username) => {

        setUserState({
            ...userState,
            username: username,
            token: localStorage.getItem('id_token') || undefined

        })

    
    }

    return (

        <UserContext.Provider
        value={{
            ...userState,
            updateToken
        }}>
            { props.children }
        </UserContext.Provider>
    )
}