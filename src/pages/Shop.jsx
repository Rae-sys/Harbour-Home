import { NavLink } from "react-router-dom"
import "../stylesheet/Shop.css"
import Furniturebar from "./Furniturebar"

export default function Shop(){
    return(
        <>
        <div class="shop-hero">
        <h1>SHOP HARBOUR HOME</h1>
        <p>
Furniture made for comfort, style, and everyday living. <br/>
 Browse our collection and order easily through WhatsApp.</p>
      </div>

      
        <Furniturebar/>

  <div class="shop-category">
        <a href="/livingroom" className="room-link">
        <img src="https://i.pinimg.com/1200x/9e/77/67/9e776721b39e91dd4c66a69f7de10a38.jpg" alt=""/>

        <h2>Sitting Room</h2>
        <p>Sofas, chairs, centre tables, and TV stands.</p>
      </a>

        <a href="/bedroom" className="room-link">
        <img src="https://i.pinimg.com/1200x/b4/9e/f8/b49ef8bc6b3c7d6df275e4778e825ff3.jpg" alt=""/>

        <h2>Bedroom</h2>
    <p>Bed frames, wardrobes, and bedside tables.</p>
      </a>

        <a href="/kitchen" className="room-link">
        <img src="https://i.pinimg.com/1200x/2c/06/70/2c0670439e6cc563135713f0db345989.jpg" alt=""/>

          <h2>Kitchen & Dining</h2>
    <p>Dining tables, chairs, and kitchen cabinets.</p>
  </a>
    

        <a href="/office" className="room-link">
        <img src="https://i.pinimg.com/1200x/76/13/ab/7613aba753b82545cfd35b6ff1ea3c48.jpg" alt=""/>

       <h2>Office</h2>
    <p>Desks, office chairs, and storage solutions.</p>
      </a>

    

      </div>


    
   
      <div class="pics">

         <h1>Need Help Choosing?</h1>
      <p>
    Chat with Harbour Home on WhatsApp for product details,<br/>
    custom orders, and delivery information in Port Harcourt.
  </p>
        
    <div class="btn">
           
     <button><a href="https://wa.me/2349037199222" target="_blank">Chat On WhatsApp</a></button>
    </div>
    </div>
        </>
    )
}