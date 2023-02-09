import React from "react";

const Footer = () => (
  <footer className="bg-light pt-5 site-footer" data-testid="footer">
    <div className="container">
      <div className="row">
        <div style={{ padding: "0 2em" }} className="col-sm-12 col-md-6">
          <h6 className="text-center">DCI Connect</h6>
          <p className="text-justify m-auto">
            DCI Connect's goal is to further assist current students at DCI, by facilitating the networking with alumni
            that are in the market and opt to offer suport and guidance as a mentor.
          </p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6 className="text-center">Support</h6>
          <ul className="footer-links">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6 className="text-center">Legal</h6>
          <ul className="footer-links">
            <li>
              <a href="#">Cookies</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Imprint</a>
            </li>
          </ul>
        </div>
      </div>
      <span className="d-block text-center pt-3 credits"> Made with 💛 by Alina Cuznetov and Rafael Oliveira.</span>
    </div>
  </footer>
);

export default Footer;
