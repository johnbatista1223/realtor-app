import React, { useState } from 'react'

export const UserContext = React.createContext()

export default function UserProvider(props) {


    const initState = {

        
        token: localStorage.getItem('id_token') || undefined

    }

    const [ userState, setUserState ] = useState(initState)

    let updateToken = () => {

        setUserState({
            ...userState,
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