import { NavLink } from "react-router-dom"
import "../stylesheet/Furniture.css"
import { useState } from "react"
import { FaChevronDown, FaXmark } from "react-icons/fa6"

export default function Furniturebar(){
  const[ showfurniture, setshowfurniture] = useState(true)
    return(
       <div class="produt">
        <div class="product-title">
          <h3>Our Furniture</h3>
        </div>

           

         <div className= {`product-link ${showfurniture ? "" : "hide"}`}>
         
        <NavLink to="/livingroom">Sitting Room</NavLink>

        <NavLink to="/bedroom">Bed Room</NavLink>

        <NavLink to="/office">Office Furniture</NavLink>
        
        <NavLink to="/kitchen">Kitchen & Dining</NavLink>

     
      </div>
      {
        showfurniture ? 
        <FaXmark className="icon" onClick={() => setshowfurniture(false)}/>
        :
        <FaChevronDown className="icon" onClick={() => setshowfurniture(true)}/>
      }
    </div>  
    )
}