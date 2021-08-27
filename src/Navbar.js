import React from 'react';
import { NavLink } from "react-router-dom"

function Navbar(){

    return (
        <>
        <h1>words</h1>
        <NavLink to="/like" activeStyle={{
            fontWeight: "bold", fontSize: "large",
            color: "green"
        }}> I like </NavLink>
        <br></br>
        <br></br>
        <NavLink to="/inbetween"  activeStyle={{
            fontWeight: "bold", fontSize: "large",
            color: "orange"
        }}> I'm inbetween about </NavLink>
        <br></br>
        <br></br>
        <NavLink to="/dont-like"  activeStyle={{
            fontWeight: "bold", fontSize: "large",
            color: "red"
        }}> I don't like </NavLink>
        <br></br>
        <br></br>
        
        </>
    )

}
export default Navbar