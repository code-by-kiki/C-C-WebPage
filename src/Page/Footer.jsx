import React from "react";
import '../Componend/Footer.css'
export default function Footer()
{
    return(
        <section className="container-fluid mt-2 Footer p-5">
  {/* Desktop View */}
  <div className="row d-none d-md-flex">
    <div className="col-md-4">
      <h4>About Us</h4>
      <p className="mt-3 text-justify">We’re a trusted C2C marketplace where people buy, sell, and trade directly with each other. From secondhand goods 
                to local services, we make it easy to connect, negotiate, and deal — safely and conveniently.</p>
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
    <div className="col-md-4">
      <h4>Terms And Condition</h4>
      <p className="mt-3">By using this platform, you agree to our Terms & Conditions. All listings, transactions, and communications are conducted directly between users. We do not guarantee the quality, safety, or legality of items posted. Users are responsible for verifying product details, meeting in safe locations, and complying with local laws. Misuse of the platform may result in account suspension or removal.</p>
      <h4>Follow us</h4>
      <p className="mt-4 instagram"><i className="bi bi-instagram me-2"></i>Instagram</p>
      <p className="facebook"><i className="bi bi-facebook me-2"></i>Facebook</p>
      <p className="twitter"><i className="bi bi-twitter-x me-2"></i>Twitter</p>
    </div>
    <div className="col-md-4">
      <h4>Help & Support</h4>
      <p className="mt-3"><b>How It Works</b> - Learn how to post ads, contact sellers, and complete transactions.</p>
      <p><b>Safety Tips</b> - Stay secure with our recommended practices for meeting and exchanging items.</p>
      <p><b>Report a Problem</b> - Encountered an issue? Let us know and we’ll investigate.</p>
    </div>
  </div>

  {/* Mobile View Accordion */}

  <div className="accordion d-block d-md-none">
    {/* About Us */}
    <div className="accordion-item">
      <h2 className="accordion-header" >
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
          About Us
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
        <div className="accordion-body">
          <p>We’re a trusted C2C marketplace where people buy, sell, and trade directly with each other. From secondhand goods 
                to local services, we make it easy to connect, negotiate, and deal — safely and conveniently.</p>
          <h5>Our Mission</h5>
            <p>Empowering individuals to exchange value locally, sustainably, and securely.</p>
          <h5>Why Choose Us</h5>
          <ul>
            <li>✔️ Easy listings</li>
            <li>✔️ Verified users</li>
            <li>✔️ Local deals</li>
            <li>✔️ No middlemen</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Terms and Follow */}
    <div className="accordion-item">
      <h2 className="accordion-header" >
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
          Terms & Follow Us
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
        <div className="accordion-body">
          <p className="mt-3">By using this platform, you agree to our Terms & Conditions. All listings, transactions, and communications are conducted directly between users. We do not guarantee the quality, safety, or legality of items posted. Users are responsible for verifying product details, meeting in safe locations, and complying with local laws. Misuse of the platform may result in account suspension or removal.</p>
          <h5>Follow us</h5>
          <p><i className="bi bi-instagram me-2"></i>Instagram</p>
          <p><i className="bi bi-facebook me-2"></i>Facebook</p>
          <p><i className="bi bi-twitter-x me-2"></i>Twitter</p>
        </div>
      </div>
    </div>

    {/* Help */}
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
          Help & Support
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#footerAccordion">
        <div className="accordion-body">
       <p ><b>How It Works</b> - Learn how to post ads, contact sellers, and complete transactions.</p>
      <p><b>Safety Tips</b> - Stay secure with our recommended practices for meeting and exchanging items.</p>
      <p><b>Report a Problem</b> - Encountered an issue? Let us know and we’ll investigate.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}