import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";



export default function Footer(){
    return(
         <footer>
          <div class="footer">
        <div class="footer-left">
            <h2>Visit or Contact Us</h2>
             <p>Port Harcourt, Rivers State, Nigeria</p>
             <p>Monday – Saturday: 9:00 AM–6:00 PM</p>
             <p>Phone: +234 9037199222</p>    
             <p>Email: hello@harbourhome.com</p>    
            </div>
      

        <div class="footer-socials">
            <h3>Follow Us :</h3>
            <FaFacebook/>
            <FaInstagram />
         <FaTwitter />
         <FaWhatsapp/>
        </div>
      
    </div>
      </footer>
    )
}