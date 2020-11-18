import React from 'react';
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <ul>
            <li ><Link to="/" >Strona główna</Link></li>
            <li ><Link to="/favorites" >Ulubione</Link></li>
        </ul>
    )
}
