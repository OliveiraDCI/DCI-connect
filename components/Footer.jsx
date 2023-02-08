import React from 'react';

const Footer = () => (
  <footer className="bg-light pt-5 site-footer" data-testid="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h6>DCI Connect</h6>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium excepturi eos, esse fugit dolorem odio
            id! Repellat ullam quaerat laborum. Made by Alina and Oliveira.
          </p>
        </div>

        <div className="col-xs-6 col-md-3">
          <h6 className="text-center">Support</h6>
          <ul className="footer-links">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-md-3">
          <h6 className="text-center">Legal</h6>
          <ul className="footer-links">
            <li>
              <a href="#">Imprint</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
