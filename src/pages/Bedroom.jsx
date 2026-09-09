import "../stylesheet/Bedroom.css"
import Furniturebar from "./Furniturebar"
import bedroomset from "../assets/bedroomset.jpg"
import Product from "./product"
import art from "../assets/art.jpg"


export default function Bedroom(){
    return(
         <>
           <div class="bedroom-hero">
                <h1>BEDROOM FURNITURE</h1>
                <p>
                    Create a calm, beautiful space designed for rest, comfort, and everyday living.</p>
              </div>
              
              <Furniturebar/>
        
        
              
            <section class="exclusive">
           <img src={bedroomset} alt=""/>
        <div class="properties">
                <h3>Featured Collection</h3>
            <h1>The Harbour Lounge Set</h1>
            <p>A complete bedroom set featuring a bed frame, wardrobe, bedside tables, and dresser.</p>
            <p>Price:$664.00 </p>
            <button><a href="#bedroom">Shop the collection</a></button>  
        </div>
        </section>
           
         <section class="sofas-lounges" id="bedroom">
            
            <h1>BEDS & BED FRAMES </h1>
            <div className="product">
               <Product image={"https://i5.walmartimages.com/seo/Homfa-King-LED-Bed-with-4-Drawers-LED-Lights-Platform-Storage-Bed-Frame-with-Upholstered-Adjustable-Button-Tufted-Headboard-PU-Black_a2c7efb5-fb8f-428c-955f-c91bc589e28e.8986d3b47d0f1efed070b992886c475a.jpeg"} title= {"Royal King Bed Frame"}  descrip={"A spacious, durable bed frame with a refined upholstered finish."}  price= {"$301.79"} />
              
 
        
             <Product image={"https://plankandbeam.com/cdn/shop/files/pb187312-002__1_1200x1200.jpg?v=1762198205"} title= {"Classic Queen Bed Frame"}  descrip={"A stylish and comfortable centrepiece for your bedroom."}  price= {"$230.00"} /> 
        

               
             <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYHz55WLj7FUiJA9Tb10BAhiOGXSfgYq-ipgQmXPiBVg&s=10"} title= {"Harbour Storage Bed"}  descrip={"A practical bed frame with built-in storage for a neat, organised space."}  price= {"$271.60"} /> 
        

              <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmmdYhC7_V3VUm6zrHnoKzWfxm5C8QLzaTs5kHLcsaORjj-6I8TpRxHOWk&s=10"} title= {"Comfort Mattress"}  descrip={"A supportive mattress designed for restful nights and comfortable mornings."}  price= {"$109.00"} /> 
          </div>
         </section>
        
        
          <section class="sofas-lounges" id="sofas-lounges">
             <h1>WARDROBES & STORAGE</h1>
            <div className="product">
               <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLEx9oTTxKhLUSam8CTVMwBob0hTgNVZAhFxb04aMpnA&s=10"} title= {"Modern 3-Door Wardrobe"}  descrip={"Spacious wardrobe storage with a clean, elegant finish."}  price= {"$194.00"} />
              
        
             <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbD6mMhptrQ2rk3DqcutKdmcZLLIdZMfeSpPcVve7Iw&s=10"} title= {"Sliding Door Wardrobe"}  descrip={"A modern wardrobe designed to save space while keeping clothing organised."}  price= {"$130.00"} /> 
        
        
              <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYh15c58l3-YvfldfCNJ03LXz8pFM2vxnmhcNn4qaAJawAVx7lIcrtw9I&s=10"} title= {"Wooden Chest of Drawers"}  descrip={"A practical storage piece for clothes, accessories, and everyday essentials."}  price= {"$185.00"} /> 
          </div>
         </section>
        
        
           
         <section class="sofas-lounges" id="sofas-lounges">
            
            <h1>BEDSIDE & DRESSING</h1>
            <div className="product">
               <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiCyN9SkRmmz-382jHrKGyNvFnt_9ky3S5G0wWVsKr4GkDU_X1eHiAIpU&s=10"} title= {"Oak Bedside Table"}  descrip={"A compact table for your lamp, books, and nighttime essentials."}  price= {"$85.00"} />
              
        
             <Product image={"https://dreamhomestore.co.uk/cdn/shop/files/hollywood-mirror-dressing-table-white-marble-hollywood-mirror-dressing-table-styled.webp?v=1779112938&width=720"} title= {"Modern Dressing Table"}  descrip={"A stylish dressing table with drawers and a matching mirror."}  price= {"$285.00"} /> 
        
        
             <Product image={"https://zzshoppaylater.com/wp-content/uploads/2025/04/Shopevrytin-Peoducts-41-1.webp"} title= {"Full-Length Mirror"}  descrip={"A stylish cabinet for displaying décor, books, and your favourite pieces."}  price= {"$181.07"} /> 
        
              
          </div>
         </section>
        
        
            
         <section class="sofas-lounges" id="sofas-lounges">
            
            <h1>FINISHING TOUCHES</h1>
            <div className="product">
               <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTysrrnkZKNR1arjLeHpSnwH9i01OzrYuM7lBQyVeYS3tbYw9gDvLrpYGM&s=10"} title= {"Soft Area Rug"}  descrip={"Add softness, texture, and warmth to your sitting-room Add warmth and comfort beside your bed with a soft bedroom rug."}  price= {"$150.00"} />
              
        
             <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdRykbRbM-AnnWjvTJdKImqlobv_HFV8U3ieY5nr52-vPuD_hq1ZZ1Ao&s=10"} title= {"Bedside Lamp"}  descrip={"A sleek entertainment unit with practical storage for your living room."}  price= {"$58.00"} /> 
        
        
             <Product image={art} title= {"Decorative Wall Mirror"}  descrip={"Add personality and a polished finish to your bedroom walls."}  price= {"$57.07"} /> 
        
        
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSia4cXIgajyY1XKkM_FtptI3idP4AqS5rPJa3AL_5h7wg1yHlVtriq8HEy&s=10" alt="" />
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