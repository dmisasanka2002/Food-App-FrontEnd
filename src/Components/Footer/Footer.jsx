import React from "react";
import "./Footer.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="container" id="footer">
        <div className="heading">
          <h2>Fresh Food.lk</h2>
        </div>
        <div className="contents">
          <dl>
            <dt>About Company</dt>
            <dd>
              <a href="#">About Us</a>
            </dd>
            <dd>
              <a href="#">Blog</a>
            </dd>
            <dd>
              <a href="#">Servises</a>
            </dd>
          </dl>
          <dl>
            <dt>About Product</dt>
            <dd>
              <a href="#">Brands</a>
            </dd>
            <dd>
              <a href="#">Order Status</a>
            </dd>
          </dl>
          <dl>
            <dt>Resources</dt>
            <dd>
              <a href="#">Support</a>
            </dd>
            <dd>
              <a href="#">FAQ</a>
            </dd>
          </dl>
          <dl>
            <dt>Contact Us</dt>
            <dd>
              <a href="#">Email</a>
            </dd>
            <dd>
              <a href="#">Phone</a>
            </dd>
          </dl>
          <dl className="right-corner">
            <dt>Subscribe to get Notifications</dt>
            <dd>
              <form action="" method="post">
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Your Email Address"
                  required
                />
                <button type="submit">Subscribe</button>
              </form>
            </dd>
            <dt className="followus">Follow Us</dt>
            <dd>
              <i>
                <FaFacebook />
              </i>
              <i>
                <FaLinkedin />
              </i>
              <i>
                <FaTwitter />
              </i>
            </dd>
          </dl>
        </div>
        <div className="privacy-policy">
          <ul>
            <li>
              &copy; {new Date().getFullYear()} Allright Reserved | Dreamcar.lk
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
