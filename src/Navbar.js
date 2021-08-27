import React from 'react';
import { NavLink } from "react-router-dom"

function Navbar(){

    return (
        <>
        <NavLink to="/like" activeStyle={{
            fontWeight: "bold",
            color: "red"
        }}> I like </NavLink>
        <br></br>
        <NavLink to="/dont-like"  activeStyle={{
            fontWeight: "bold",
            color: "red"
        }}> I don't like </NavLink>
        </>
    )

}
export default Navbar