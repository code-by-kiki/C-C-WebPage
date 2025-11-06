import React from "react";
import '../Componend/Footer.css'
export default function Footer()
{
    return(
        <section className="container-fluid mt-2 Footer p-5">
         <div className="row mt-5">
            {/* About Content */}
            <div className="col-md-4 col-sm-12 ">
             <h4>About Us </h4>
               <p style={{textAlign:"justify"}} className="mt-3">We’re a trusted C2C marketplace where people buy, sell, and trade directly with each other. From secondhand goods to local services, we make it easy to connect, negotiate, and deal — safely and conveniently.</p>
            <h4>Our Mission</h4>
                <p>Empowering individuals to exchange value locally, sustainably, and securely.</p>
            <h4>Why Choose Us</h4>
                 <dl>
                    <dt>✔️ Easy listings</dt>
                    <dt>✔️ Verified users</dt>
                    <dt>✔️ Local deals</dt>
                    <dt>✔️ No middlemen</dt>
                 </dl>
            </div>
            {/* Follow */}
            <div className="col-md-4">
              <h4 >Terms And Condition </h4>  
              <p className="mt-3">By using this platform, you agree to our Terms & Conditions. All listings, transactions, and communications are conducted directly between users. We do not guarantee the quality, safety, or legality of items posted. Users are responsible for verifying product details, meeting in safe locations, and complying with local laws. Misuse of the platform may result in account suspension or removal.</p>
              <h4>Follow us</h4>
               <p className="mt-4 instagram">  <i class="bi bi-instagram fs-5 me-5 "></i> <span className="instagramText">Instagram</span></p> 
               <p className="facebook"> <i class="bi bi-facebook fs-5 me-5"></i>  <span className="facebookText">Facebook</span></p>
               <p className="twitter"><i class="bi bi-twitter-x fs-5 me-5 "></i>  <span className="twitterText">Twitter</span></p>
            </div>

            {/* help  */}
            <div className="col-md-4">
                <h4> Help & Support</h4>
                 <p className="mt-3"><b>How Its Work</b> - Learn how to post ads, contact sellers, and complete transactions.</p>
                 <p><b>Safety Tips</b> - Stay secure with our recommended practices for meeting and exchanging items.</p>
                 <p><b>Report a Problem</b> - Encountered an issue? Let us know and we’ll investigate.</p>
            </div>
            </div>     
        </section>
    )
}