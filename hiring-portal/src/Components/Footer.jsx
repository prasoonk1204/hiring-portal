import React from "react";
import "../CSS/footer.css";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex">
                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">FAQs</a></li>
                            <li><a href="/">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex">
                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/yash-gabani-527886258/"><FaLinkedin /></a>
                            <a href="https://twitter.com/Hirehub280355"><FaTwitter /></a>
                            <a href="https://github.com/Yashgabani845"><FaGithub /></a>
                            <a href="https://www.instagram.com/yash845_/"><FaInstagram /></a>
                            <a href="https://www.facebook.com/"><FaFacebook /></a> {/* Assuming you're using this for Facebook */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Hirehub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
