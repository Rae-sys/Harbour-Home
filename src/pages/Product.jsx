
export default function Product({image, title, descrip, price}){
    return(
       <div className="product">
         <div className="products">
    
        
           <div class="product-image">
             <img src={image} alt=""/>
          
           </div>
           <div class="product-info">

            <h3> {title}</h3>
            <p>{descrip}</p>
            <h4>Price: {price}</h4>
              <a href="https://wa.me/2349037199222" target="_blank">Order on WhatsApp</a>
        </div>
</div>
       </div>
    )
}