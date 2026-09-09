import  "../stylesheet/Contact.css"

export default function Contact() {
 return(
    <>
     <div className="hero">
     <h1>CONTACT HARBOUR HOME</h1>
    </div>


    <section className="welcme">
       <h1>We Will Love To Hear From You</h1> <br /> 
     <p>Have a question about our furniture, delivery, custom orders, or a product you have seen in our collection? Our team is here to help. <br />
     Whether you are furnishing a single room, a complete home, or an office space, feel free to get in touch with us.

</p>
    
    </section>


    <section className="contact">
       <div className="contact-info">
         <h2>GET IN TOUCH</h2>
       <h3> Phone</h3>
       <p>Call us for enquires,product information and support </p>
       <p>+234 903 719 9222</p>
       <h3>Email</h3>
       <p>Send us an email and we will get back to you as soon as possible.</p>
       <a href="mailto:oluwadipefunke@gmail.com">info@harbourhome.com</a>
       <h3> WhatsApp
</h3>
       <p>Whether you are furnishing a single room, a complete home, <br />
         or an office space, feel free to get in touch with us.
</p>
         <div className="buttn">
                   
             <button><a href="https://wa.me/2349037199222" target="_blank">Chat On WhatsApp</a></button>
            </div>
       </div>

       <div className="form"> 
               <h1>CONTACT FORM</h1>

        <form action="" >
        <input type="text" placeholder="Your Name" required/>
         <input type="text" placeholder="Your Phone Number" required/>
          <input type="text" placeholder="Your E-mail" required/>
          <textarea placeholder="Message"></textarea>

          <button type="submit">
            SEND MESSAGE 
          </button>
      </form>
      </div>
    </section>



    <section className="custom">
      <h2>CUSTOM FURNITURE ENQUIRIES
</h2>

<p>Looking for furniture made specifically for your space?
</p>

<p>Harbour Home offers custom furniture options to suit different spaces, styles, and needs. Contact us to discuss:
</p>
<ul>
   <li> Custom sizes
</li>
<li> Colours and finishes
</li>
<li> Materials
</li>
<li>Furniture designs
</li>
<li>Home and office furniture
</li>
<li> Delivery and installation
</li>
</ul>


 <div class="btn">
                   
             <button><a href="https://wa.me/2349037199222" target="_blank">Discuss a Custom Order</a></button>
            </div>
    </section>


    <section className="visit">
      <h2>DELIVERY & SUPPORT
</h2>

<p>We provide support before and after your purchase.
</p>
 <p>Contact Harbour Home for information about:
</p>


<ul>
   <li>Product availability
</li>
<li>  Delivery options
</li>
<li> Delivery costs
</li>
<li>Custom orders
</li>
<li>Furniture enquiries
</li>
<li> General customer support
</li>
</ul>
<p>We are happy to help you find furniture that fits your space and needs.
</p>

    </section>

    <section className="let">
    <h2>LET’S CREATE YOUR PERFECT SPACE
</h2> 

<p>Whether you are decorating a new home, updating a room, furnishing an office, or looking for custom furniture, Harbour Home is ready to help. <br /> <br />
Get in touch with us today and let’s create a space you’ll love. 
</p>
    </section>
    </>
 )
}
