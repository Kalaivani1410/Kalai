import React from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-section">
        <div className="office">
          <h3>United Kingdom Office</h3>
          <p>
            HotLizard Ltd. <br />
            Aspire House, Tower Business Park, <br />
            Tiptree, Essex, CO5 0LX <br />
            United Kingdom <br />
            <a href="tel:+441621814290">+44 (0)1621 814290</a> <br />
            <a href="mailto:sales@hotlizard.net">sales@hotlizard.net</a>
          </p>
        </div>
        <div className="office">
          <h3>United States Office</h3>
          <p>
            HotLizard USA Inc. <br />
            Suite 400, 13325 South Point Boulevard, <br />
            Charlotte, NC 28273 <br />
            USA <br />
            <a href="tel:+12167630818">+1 216 763 0818</a> <br />
            <a href="mailto:sales@hotlizard.net">sales@hotlizard.net</a>
          </p>
        </div>
        <div className="office">
          <h3>Australia Office</h3>
          <p>
            Suite 49, Level 3, <br />
            330 Wattle Street, Ultimo, <br />
            NSW 2007, Australia <br />
            <a href="mailto:sales@hotlizard.net">sales@hotlizard.net</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
