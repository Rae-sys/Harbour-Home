import "../stylesheet/Home.css"

export default function Home(){
    return(
         <>
         <div class="hero">
    
    <h1>Furniture That Feels Like Home</h1>
    <p>Discover beautifully made furniture designed for comfort, style, and everyday living. From cosy sofas to elegant dining sets, Harbour Home helps you create a space you will love coming back to.</p>
    <button class="search">
        <h4>Harbour Home</h4>
        <input type="text" value="search" placeholder="search for product"/>
    </button>
 </div>




<section class="cards">
    <h1>OUR COLLECTION</h1>
<div class="wrapper">
        
        <div class="sitting-room">
            <h2>Sitting Room</h2>
          <p>Comfortable sofas, chairs, centre tables, and TV stands made for relaxing.</p>
            <button><a href="/shop">SHOP NOW</a></button>
    </div>
    
    
        <div class="bed-room">
            <h2>Bed Room</h2>
            <p>Cozy beds, dressers, nightstands, and wardrobes designed for a restful sleep.</p>
            <button><a href="/shop">SHOP NOW</a></button>
        </div>
    

    
        <div class="office-furniture">
            <h2>Office Furniture</h2>
            <p>Stylish desks, chairs, and storage solutions designed for productivity and comfort.</p>
            <button><a href="/shop">SHOP NOW</a></button>
        </div>

        <div class="kitchen-furniture">
            <h2>Kitchen and Dining</h2>
            <p>Functional and stylish kitchen tables, chairs, and storage solutions for your culinary space.</p>
            <button><a href="/shop">SHOP NOW</a></button>
    </div>
</div>
</section>
    
<section class="why-choose-us">
    <img src="https://i.pinimg.com/736x/e7/1b/22/e71b228782f3610a0ee5a000ff870ad9.jpg" alt="" />  
<div class="reason">
        <h1>Why Choose Harbour Home?</h1>
    <h3>Quality You Can Trust</h3>
    <p>Our furniture is made with durable materials for everyday use.</p>
    
    <h3>Designed for Your Lifestyle</h3>
    <p>Our furniture is made with durable materials for everyday use..</p>

     <h3>Made for Nigerian Homes</h3>
    <p>Furniture selected to suit your space, needs, and style.</p>

     <h3>Easy Ordering</h3>
    <p>Choose your furniture online and contact us on WhatsApp to place an order.</p>
</div>
</section>

 <div class="pic">
        <p>Let’s Make Your House Feel Like Home <br/> 
     Find furniture that brings comfort, character, and style to every room.</p>
        
    <div class="btn">
         <button><a href="/shop">Explore Our Collection</a></button>   
     <button><a href="https://wa.me/2349037199222" target="_blank">Chat On WhatsApp</a></button>
    </div>
    </div>
        
         </>

    )

}