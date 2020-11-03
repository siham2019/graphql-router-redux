import React from 'react'
import {pcontext} from './Provider'

export function NavBar() {
    const y= React.useContext(pcontext)
    return(
        <div>
            {y.profile.name +" "+ y.profile.age}
        </div>
    )
}