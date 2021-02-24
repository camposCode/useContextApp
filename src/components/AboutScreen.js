import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { user, setUser } = useContext( UserContext );

    return (
        <>
            <h3>AboutScreen page</h3>
            <hr/>

            <pre>
                { JSON.stringify(user, null, 3 )}
            </pre>

            <button onClick = {() => setUser({
                id: 456,
                name: "Rusty"
            })}>Info</button>
        </>
    )
}
