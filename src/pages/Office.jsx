import "../stylesheet/Office.css"
import Furniturebar from "./Furniturebar"
import Product from "./Product"


export default function Office(){
    return(
        <>
         <div class="office-hero">
                        <h1>OFFICE <br /> FURNITURE</h1>
                        <p>
                            Create a professional comfortable  workspace designed for productivity, organisation, and everyday work.</p>
                      </div>
                      
                      <Furniturebar/>
                
        
         <section class="exclusive">
                   <img src={"https://image.made-in-china.com/2f0j00crvGILBFLeqN/Modern-Contemporary-Office-Desks-Executive-Desk-Office-Furniture.jpg"} alt=""/>
                <div class="properties">
                        <h3>Featured Collection</h3>
                    <h1>The Executive Office Set</h1>
                    <p>A complete office set featuring an executive desk, office chair, storage cabinet, and bookshelf.</p>
                    <p>Price:$664.00 </p>
                    <button><a href="#office">Shop the collection</a></button>  
                </div>
                </section>


                <section className="sofas-lounges" id="office">
                      <h1>DESKS & WORKSTATIONS </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8DOpLQanBEn5BE5EW8a0115ePN0N6PXyEEeSE8OgBQ&s=10"} title={"Executive Office Desk"} descrip={"A spacious and elegant desk designed for comfortable working and professional office spaces."}
                                price={"$254.00"}/>


                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-z1TQ89l4j_J8EkU0c81CW4MoPMVUr_5dHE_gbnVS2w&s=10"} title={"Modern Work Desk"} descrip={"A clean and practical workstation suitable for everyday office tasks and study."}
                                price={"$209.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRw0u6iXEr75i_lNh_iuPlYptyLDBRAvYn-VNQcpRiNB9YDIPs91tsOdttJsV-ocxksbqh0OcypOsbRQZ6su2On94yOUiyIFd_ynmqSf7wMJQT5UUJil8UFZw-HmfX9&usqp=CAc"} title={"L-Shaped Office Desk"} descrip={"A versatile desk offering plenty of workspace for computers, documents, and office essentials."}
                                price={"$261.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQUv78mroijf3TPp459Ur7MIgBcsQDCgk5PMxW80uC9Yrogb3dP4_hGqGf1hGNjihelgwJAx9Jxp72lNofJtQCro1loab5WgbywPdlAtZcjAnA3KaNSWC9umYUCSN2feBkYD1krMQ&usqp=CAc"} title={"Compact Office Desk"} descrip={"A simple space-saving desk designed for smaller offices and home workspaces."}
                                price={"$134.00"}/>
                            </div>
           
                </section>




                
                <section className="sofas-lounges" >
                      <h1>OFFICE CHAIRS & SEATING </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkH2CMPTVsnznXYXUh05Z2D9H-CdJR3GX7KpBM34XGsw&s=10"} title={"Executive Office Chair"} descrip={"A comfortable, supportive chair with a refined finish for long working hours."}
                                price={"186.00"}/>


                                <Product image={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS0zZctLKr6VgdLXQ8ZtgIq-zVFsLL3Qyjp2PMsaE2XfeAedaCcF66TmtThdAE9ebLrRMda_Z2_LnGzh2i5iIrKokQhE6Kbe4swopL1oAlQ&usqp=CAc"} title={"Ergonomic Office Chair"} descrip={"A supportive office chair designed to provide comfort and proper posture throughout the workday."}
                                price={"$134.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgQdpIK5maKhHDMvjDhGoMw3jTD_1DBPBfIBNuBAfDYw&s"} title={"Visitor’s Chair"} descrip={"A stylish and comfortable chair designed for clients, guests, and waiting areas."}
                                price={"$90.00"}/>



                                <Product image={"https://www.vari.com/dw/image/v2/BDFT_PRD/on/demandware.static/-/Sites-vari-master-catalog/default/dw3b48efc5/images/large/ST-UPCNFCHR/401564-sterling-graphite/vari-chair_401561_graphite-sterling_single.jpg?sw=800&sh=800"} title={"Conference Chair"} descrip={"A practical seating option for meetings, conferences, and collaborative workspaces."}
                                price={"$71.00"}/>
                            </div>
                </section>




                
                <section className="sofas-lounges" >
                      <h1>STORAGE & ORGANISATION </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBrf89e3lujorsC1Q8rVLkgFf8XwGWdBSPnuX9MzBxpQ&s=10"} title={"Office Storage Cabinet"} descrip={"A spacious cabinet for keeping documents, files, and office supplies organised."}
                                price={"$164.00"}/>


                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XD6Tk5Xex5PaHrzBC8Pr4u8VjpzvOhmoGqIFUCkrxg&s=10"} title={"Filing Cabinet"} descrip={"A practical storage solution designed for organising important documents and files."}
                                price={"$112.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoBt4DoFYB4k6_abwXqrhK7CcI8Z6tNydN6TbWR0HVdw&s=10"} title={"Office Bookshelf"} descrip={"A modern bookshelf for books, folders, decorations, and everyday office essentials."}
                                price={"$142.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxctGZCaNkyfM5CUEFeSdYV4xTDDxKdjQqUJ0VbmWmrw&s=10"} title={"Mobile Drawer Unit"} descrip={"A compact drawer unit that provides convenient storage beside your workstation."}
                                price={"$82.00"}/>
                            </div>
                </section>



                
                <section className="sofas-lounges" >
                      <h1>MEETING & COLLABORATION </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWZN0sdirxdTA4cXbXvqHuBg2tWg9Xj-hd9v1BuKMPXQ&s=10"} title={"Conference Table"} descrip={"A spacious and elegant table designed for meetings, presentations, and team discussions."}
                                price={"$335.00"}/>


                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-RbPJtnER6bi2iVrmpo5n6c5kSPwvZ2PMQFOnpe5jA&s=10"} title={"Meeting Table"} descrip={"A modern table suitable for small meetings and collaborative office spaces."}
                                price={"$209.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4P2HzQFV-DQDj_zc6_hAl8XO3hnkzCDAc68j4NhDA8n3kskW2MxqLRyE&s=10"} title={"Reception Desk"} descrip={"A spacious and elegant desk designed for comfortable working and professional office A professional reception desk designed to create a welcoming first impression.."}
                                price={"$283.00"}/>



                            </div>
                </section>



                
                <section className="sofas-lounges" id="sofas-lounges">
                      <h1>FINISHING TOUCHES </h1>
                            <div className="product">
                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1KuxGXADd7fvBDWfmlnNLESDmK5N_ildazEOtr7Rrg&s=10"} title={"Office Floor Rug"} descrip={"Add warmth and comfort to your workspace with a simple, elegant office rug."}
                                price={"$75.00"}/>


                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdt2gOsIibwWEteJrxYhYPLE9hSBlLCVWGyWI9KF16WA&s=10"} title={"Desk Lamp"} descrip={"Create a focused working atmosphere with a stylish desk lamp."}
                                price={"$52.00"}/>



                                <Product image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSagirL5pxrRAvteku4WxxF1luKTIfDgdUoPU6qYs1QIQ&s=10"} title={"Office Wall Clock"} descrip={"A clean and modern wall clock that adds functionality and style to your office."}
                                price={"$41.00"}/>



                                <Product image={"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2O8NLm5ovwhCCjbe61cWDyNslhIyJiF_5gm-6jrHqUZjTYZFbyXi4NoRoKt1DMVZNzdQPFk1XV8SMILTWgT2G-Xgc3HA1gtymjZhjjwAynlTGNqEhQgi4&usqp=CAc"} title={"Decorative Plant Stand"} descrip={"Add a touch of nature to your workspace with a simple decorative plant stand."}
                                price={"$49.00"}/>
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmXbemLej_jQUiAwQxetYh51uy2F8GUBV0vHv3GEX20xxe4eG6XN3Nenk9&s=10" alt="" />
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