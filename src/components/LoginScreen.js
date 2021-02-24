import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );


    return (
        <>
            <h3>LoginScreen</h3>
            <hr/>

            <button className = "btn"   onClick = { ()=> setUser({
                id: 123,
                name: "jose"
            })}>Login</button>
        </>
    )
}
