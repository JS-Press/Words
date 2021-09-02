import React from 'react';
import { NavLink } from "react-router-dom"

function Navbar(){

    return (
        <>
        <h1 className = 'nav' >words</h1>
        <div id = 'nav'>
        <br></br>
        <NavLink to="/like" className = 'nav' activeStyle={{
            fontWeight: "bold",
            color: "mediumseagreen"
        }}> I like </NavLink>
        <NavLink to="/inbetween" className = 'nav' activeStyle={{
            fontWeight: "bold",
            color: "orange"
        }}> I'm inbetween about </NavLink>
        <NavLink to="/dislike"  className = 'nav' activeStyle={{
            fontWeight: "bold",
            color: "tomato"
        }}> I don't like </NavLink>
        <br></br>
        
        </div>
        </>
    )

}
export default Navbar