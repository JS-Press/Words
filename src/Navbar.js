import React from 'react';
import { NavLink } from "react-router-dom"

function Navbar(){

    return (
        <>
        <NavLink to="/like" activeStyle={{
            fontWeight: "bold",
            color: "green"
        }}> I like </NavLink>
        <br></br>
        <br></br>
        <NavLink to="/inbetween"  activeStyle={{
            fontWeight: "bold",
            color: "orange"
        }}> I'm inbetween about </NavLink>
        <br></br>
        <br></br>
        <NavLink to="/dont-like"  activeStyle={{
            fontWeight: "bold",
            color: "red"
        }}> I don't like </NavLink>
        <br></br>
        <br></br>
        
        </>
    )

}
export default Navbar