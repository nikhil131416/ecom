import React, { useState } from 'react'
import "./Navbar.css"

function Navbar() {
    let[nav,setNav]=useState("");

    function handleClick(){

        setNav(!nav)
    }
    return (
        <div className='navbar'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03855vIsQu_B5_pE9tZBSMbLUuOl5XNP4rg&s" height="70px"/>
            <div className='options'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>About us </li>


                </ul>
            </div>
        <p onClick={handleClick}>  {!nav ? (  <i class="fa-solid fa-ellipsis"></i>):("")}  </p>

        </div>
    )
}

export default Navbar
