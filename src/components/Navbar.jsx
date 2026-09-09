import { NavLink } from "react-router-dom"
import logo from "../assets/home.jpg"
import { useState } from "react";
import { FaList, FaXmark } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";


export default function Navbar(){
    const[showNav, setShowNav] = useState(true)
    return(
        <nav>
            <div class="image">
                <img src= {logo} alt=""/>
            </div>
            
          
            <div className= {`nav-link ${showNav ? "" : "hide"}`}>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/shop">SHOP</NavLink>
                <NavLink to="/about">ABOUT</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
              
            </div>
          

          {
            showNav ? 
            <FaXmark className="bi bi-list" onClick={() => setShowNav(false)}/>
            :
             <FaList className="bi bi-list" onClick={() => setShowNav(true)}/>
          }
        </nav> 
    )
}