import React from 'react';
import { NavLink } from "react-router-dom"

function Navbar(){

    return (
        <>
        <br></br>
        <h1 className = 'nav' >words</h1>
        <NavLink to="/like" className = 'nav' activeStyle={{
            fontWeight: "bold", fontSize: "large",
            color: "green"
        }}> I like </NavLink>
        <NavLink to="/inbetween" className = 'nav' activeStyle={{
            fontWeight: "bold", fontSize: "large",
            color: "orange"
        }}> I'm inbetween about </NavLink>
        <NavLink to="/dislike"  className = 'nav' activeStyle={{
            fontWeight: "bold", fontSize: "large",
            color: "red"
        }}> I don't like </NavLink>
        <br></br>

        
        </>
    )

}
export default Navbar