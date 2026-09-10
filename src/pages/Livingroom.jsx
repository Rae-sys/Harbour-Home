import "../stylesheet/Livingroom.css"
import Furniturebar from "./Furniturebar"
import Sofa from "../assets/sofa.jpg"
import Product from "./Product"
import green from "../assets/green armchair.PNG"
import red from "../assets/red accent chair.PNG"
import gray from "../assets/gray lounge chair.PNG"
import lamp from"../assets/lamo.jpg"
import mirror from "../assets/mirror.jpg"


export default function Livingroom(){
    return(
   <>
   <div class="sitting-room-hero">
        <h1>SITTING ROOM FURNITURE</h1>
        <p>
            Elevate every moment at home with furniture that brings comfort, character, and refined style to your living space.</p>
      </div>
      
      <Furniturebar/>


      
    <section class="exclusive">
   <img src={Sofa} alt=""/>
<div class="properties">
        <h3>Featured Collection</h3>
    <h1>The Harbour Lounge Set</h1>
    <p>A complete seating arrangement designed for relaxed evenings and effortless hosting..</p>
    <p>Price:$760.00 </p>
    <button><a href="#sofas-lounges">Shop the collection</a></button>  
</div>
</section>
   
 <section class="sofas-lounges" id="sofas-lounges">
    
    <h1>SOFAS & LOUNGES</h1>
    <div className="product">
       <Product image={"https://i.pinimg.com/736x/f4/7c/79/f47c79b6bf8736a2331ecfd15af360fa.jpg"} title= {"Monarch 3-Seater Sofa"}  descrip={"A spacious, tailored sofa with deep cushioning and a timeless silhouette."}  price= {"$200.00"} />
      

     <Product image={"https://i.pinimg.com/1200x/1c/68/40/1c6840295cfdbc04ad07b59c2772c1d4.jpg"} title= {"Haven L-Shaped Sofa"}  descrip={"Generous seating with a modern shape, perfect for family rooms and entertaining."}  price= {"$150.00"} /> 


     <Product image={"https://i.pinimg.com/1200x/16/49/cd/1649cdb6132f579ca4794048bae667b3.jpg"} title= {"Aria 2-Seater Sofa"}  descrip={" A compact, elegant sofa made for smaller spaces without compromising comfort."}  price= {"$100.00"} /> 

      <Product image={"https://i.pinimg.com/736x/02/d7/39/02d7390d68ecc24e48eb5c968e0868e0.jpg"} title= {"loud Recliner Chair"}  descrip={" Sink into soft, supportive comfort with this stylish reclining chair."}  price= {"$77.00"} /> 
  </div>
 </section>


  <section class="sofas-lounges" id="sofas-lounges">
     <h1>ACCENT CHAIRS</h1>
    <div className="product">
       <Product image={red} title= {"Velvet Accent Chair"}  descrip={"A spacious, tailored sofa with deep cushioning and a timeless silhouette."}  price= {"$110.00"} />
      

     <Product image={gray} title= {"Cove Lounge Chair"}  descrip={"A curved, comfortable chair with a clean contemporary finish."}  price= {"$130.00"} /> 


      <Product image={green} title= {"Classic Armchair"}  descrip={" A timeless armchair designed for reading, relaxing, and everyday comfort."}  price= {"$120.00"} /> 
  </div>
 </section>


   
 <section class="sofas-lounges" id="sofas-lounges">
    
    <h1>TABLES & STORAGE</h1>
    <div className="product">
       <Product image={"https://i.pinimg.com/1200x/57/b1/6b/57b16be3a6b94a3c4632475d108cc2d7.jpg"} title= {"Oak Centre Table"}  descrip={"A durable wooden centre table with a smooth, modern finish."}  price= {"$91.00"} />
      

     <Product image={"https://i.pinimg.com/1200x/f4/93/11/f49311142d62bf2c3886c3edaddc6ba9.jpg"} title= {"Nest Side Table Set"}  descrip={"A sleek entertainment unit with practical storage for your living room."}  price= {"$58.00"} /> 


     <Product image={"https://i.pinimg.com/736x/94/e4/9f/94e49fee96ca7f89fd345f5c7cfcd369.jpg"} title= {"Display Cabinet"}  descrip={"A stylish cabinet for displaying décor, books, and your favourite pieces."}  price= {"$181.07"} /> 

      <Product image={"https://i.pinimg.com/1200x/a4/b4/66/a4b466b532430d5b8bb86eb16755f692.jpg"} title= {"Modern TV Console"}  descrip={"A sleek entertainment unit with practical storage for your living room."}  price= {"$133.00"} /> 
  </div>
 </section>


    
 <section class="sofas-lounges" id="sofas-lounges">
    
    <h1>FINISHING TOUCHES</h1>
    <div className="product">
       <Product image={"https://i.pinimg.com/1200x/67/c0/0f/67c00f7c08a98ba2c29c1169ba92f3c1.jpg"} title= {"Premium Area Rug"}  descrip={"Add softness, texture, and warmth to your sitting-room floor."}  price= {"$90.00"} />
      

     <Product image={lamp} title= {"Floor Lamp"}  descrip={"A sleek entertainment unit with practical storage for your living room."}  price= {"$58.00"} /> 


     <Product image={mirror} title= {"Decorative Wall Mirror"}  descrip={"A modern mirror designed to brighten your space and make it feel larger."}  price= {"$67.07"} /> 


  </div>
 </section>


   
                     <section className="div">
                        <div class="picture">
        
                 <div className="hm">
                    <h2>CUSTOM ORDERS</h2>
              <p>
       Make your bedroom your own. Harbour Home offers custom bed frames, wardrobes, dressing tables, and storage solutions made to fit your space and style. <br /> 

Chat with us on WhatsApp to discuss sizes, colours, materials, and delivery in Port Harcourt..
        
          </p>
                
            <div class="btn">
                   
             <button><a href="https://wa.me/2349037199222" target="_blank">Chat On WhatsApp</a></button>
            </div>
            
                 </div>
            <img src="https://i.pinimg.com/1200x/ba/84/fc/ba84fcfd66842c10db314f16b1fad644.jpg" alt="" />
            </div>

              <hr />



            <section className="delivery">
                <div className="delivery-info">
                    <h2>DELIVERY & SUPPORT</h2>
                    <p>We deliver kitchen and dining furniture across Port Harcourt and nearby areas. <br />
                    Contact us for product avalibility, delivery cost, installation and custom-order information
                    </p>
                </div>
                <div className="delivery-icon">
                    <p>Nationwide Delivery</p>
                    <p>Secure Packaging</p>
                    <p>Professional Installation </p>
       
                </div>
            </section>
                     </section>




   </>

    )
}