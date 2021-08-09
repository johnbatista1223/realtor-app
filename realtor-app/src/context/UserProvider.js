import React, { useState } from 'react'

export const UserContext = React.createContext()

export default function UserProvider(props) {


    const initState = {

        loggedIn: true

    }

    const [ userState, setUserState ] = useState(initState)

    return (

        <UserContext.Provider
        value={{
            ...userState
        }}>
            { props.children }
        </UserContext.Provider>
    )
}