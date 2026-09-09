import "../stylesheet/Kitchen.css"
import Furniturebar from "./Furniturebar"
import Product from "./product"



export default function Kitchen(){
    return(
        <> 
           <div class="kitchen-hero">
                        <h1>KITCHEN FURNITURE</h1>
                        <p>
                          Beautifully crafted pieces for a functional kitchen and memorable dining experiences.
</p>
                      </div>
                      
                      <Furniturebar/>
                

                <section class="exclusive">
                   <img src={"https://bsg-i.nbxc.com/product/5b/79/de/30ec7fd694b6edcb2dfc3c32c3.jpg@95Q.webp"} alt=""/>
                <div class="properties">
                        <h3>Featured Collection</h3>
                    <h1>The Complete Kitchen & Dining Set
</h1>
                    <p>A complete set featuring kitchen cabinets, dining table with chairs, and storage solutions.
</p>
                    <p>Price:$1,080.00 </p>
                    <button><a href="#kitchen">Shop the collection</a></button>  
                </div>
                </section>

                  <section className="sofas-lounges" id="#kitchen">
                      <h1>KITCHEN CABINETS & STORAGE
 </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgW5cd4ImwzEdTqZAElqeeY8WISnNm2FklI6UwYeBag&s=10"} title={"Modern Kitchen Cabinet Set"} descrip={"Stylish and spacious cabinets designed to keep your kitchen organised and elegant."}
                                price={"$633.00"}/>


                                <Product image={"data:image/jpeg;base64,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"} title={"Wall-Mounted Kitchen Cabinet"} descrip={"Space-saving wall cabinet perfect for storing kitchen essentials and keeping counters clear."}
                                price={"$183.00"}/>



                                <Product image={"https://cdn.discount.com.au/wp-content/uploads/2026/01/23055510/Kitchen-Base-Cabinets-Perth.jpg"} title={"Base Kitchen Cabinet"} descrip={"Durable base cabinet with ample storage for pots, pans, and everyday kitchen items."}
                                price={"$239.00"}/>



                               
                            </div>
           
                </section>


                 <section className="sofas-lounges" id="kitchen">
                      <h1>DINING TABLES & SETS
 </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMyiNuvr3ixuPRv7R7sa1Wc7PxNggH-SfKB8TRcqVjg&s=10"} title={"6-Seater Dining Table Set"} descrip={"A classic 6-seater dining set perfect for family meals and entertaining guests."}
                                price={"$484.00"}/>


                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJya4O3NJbR_eJYHUhvmPEoiFBf1sQy6ftEYekOalOeg&s=10"} title={"4-Seater Dining Table Set"} descrip={"A spacious dining set for large families and special gatherings."}
                                price={"$410.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvR-FCoIzYShpHbZVwl1CJt7IzVas2lfrT4qJwirSBzA&s=10"} title={"8-Seater Dining Tabl Set"} descrip={"A compact and stylish dining set ideal for small families and cozy spaces."}
                                price={"$633.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTECIgo-1q1jG3YzbwPTzPnSuK_pd0Ntu5-s0N82LNI8gKsnJvhMTT7RJGxYfayAx45PhFTBwCttBm7uv5TxDWSEhMn2b_i258O4cgWdH9SO8-X_u5fXLRcfdHiEm_M&usqp=CAc"} title={"Round Dining Table"} descrip={"A modern round table that brings everyone together for warm conversations."}
                                price={"$358.00"}/>
                            </div>
           
                </section>



                 <section className="sofas-lounges" id="sofas-lounges">
                      <h1>KITCHEN ISLANDS & CARTS </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTr6AVwE4Kx0SJGpWOsyHrsLhH26hM_iW61gLlWOrcSw&s=10"} title={"Kitchen Island"} descrip={"A functional kitchen island that adds extra workspace and storage."}
                                price={"$410.00"}/>


                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6V43nz_GJplGDzhtumcTE51JKHSzzyPMQpHRYmpbN2Q&s=10"} title={"Kitchen Trolley Cart"} descrip={"A mobile cart for easy storage and movement around your kitchen."}
                                price={"$134.00"}/>
  </div>
               
                </section>
                

                 <section className="sofas-lounges" id="sofas-lounges">
                      <h1> DINING CHAIRS & SEATING
 </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnCTS69uAfiJLtD4nAgZZnT7L_ItY0TNkyhBSe6t_ELw&s=10"} title={"Upholstered Dining Chair"} descrip={"Comfortable and elegant chair with soft upholstery for a premium dining experience."}
                                price={"$63.00"}/>


                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2StrHdPOUoK1u5AahRxvDTeEXlK2gHOq-va9H9jWqA&s"} title={"Wooden Dining Chair"} descrip={"A classic wooden chair that combines durability with timeless style"}
                                price={"$4.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uqi12LRunW4TTWPqDuIJpBYTFjrgw90HH7lq4105WQ&s=10"} title={"Dining Bench"} descrip={"A spacious and elegant desk designed for comfortable working and professional office spaces."}
                                price={"$49.00"}/>

                            </div>
           
                </section>

                 <section className="sofas-lounges" id="sofas-lounges">
                      <h1>FINISHING TOUCHES </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdKpyiwIRQ55WDb8pGcQlIbeCG-b5lnEpuWHwmfCBXA&s=10"} title={"Buffet Sideboard"} descrip={"A stylish sideboard for extra storage and serving during meals and gatherings."}
                                price={"$462.00"}/>





                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDEqigYKGjUxAOtb3-o6g8jyFUict4FBw5yBvZCuD_g&s=10"} title={"Kitchen Rack"} descrip={"A multi-purpose rack for storing spices, jars, and kitchen essentials."}
                                price={"$49.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7mvXKfzSC-V4quq-E-Kenw6Hkd233FjH-sRQ5q9DHw&s=10"} title={"Dish Drainer Rack"} descrip={"Keep your kitchen neat and organized with a durable dish drainer rack."}
                                price={"$34.00"}/>
                            </div>
           
                </section>
<section className="div">
    
                     <div class="picture">
        
                 <div className="hm">
                    <h2>CUSTOM ORDERS</h2>
              <p>
Make your kitchen and dining space your own. Harbour Home offers custom kitchen cabinets, dining tables, chairs, storage units, and more to fit your space, style, and needs. <br />

Chat with us on WhatsApp to discuss sizes, colours, materials, kitchen layout, and delivery in Port Harcourt.
        
          </p>
                
            <div class="btn">
                   
             <button><a href="https://wa.me/2349037199222" target="_blank">Chat On WhatsApp</a></button>
            </div>
            
                 </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYr50UX1QxdQleNT4pLoy3TnrK8Zq1wkjzFd3YIbPuYzxtLpXRCthgNnQ&s=10" alt="" />
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