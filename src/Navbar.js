import React from 'react';
import { NavLink } from "react-router-dom"

function Navbar(){

    return (
        <>
        <NavLink to="/like" activeStyle={{
            fontWeight: "bold",
            color: "red"
        }}> Words I Like </NavLink>
        <br></br>
        <NavLink to="/dontLike"  activeStyle={{
            fontWeight: "bold",
            color: "red"
        }}> Words I Don't Like </NavLink>
        </>
    )

}
export default Navbar