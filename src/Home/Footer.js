import 'font-awesome/css/font-awesome.min.css';
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <div className="footer-wrapper" style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/footerbg.png'})`}}>
                <div className="container">
                    <div className="Frow">
                        <div className="col-md-4">
                            <div className="footer-info">
                                <img src="images/footerlogo.png" alt="" />
                                <h2>Blockchain</h2>
                                <a href="mailto:info@blockchain.com">info@blockchain.com</a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className="footer-title">General</h2>
                            <div className="quick-links">
                                <ul>
                                    <li><NavLink to="">Home</NavLink></li>
                                    <li><NavLink to="">Our Solution</NavLink></li>
                                    <li><NavLink to="">About Us</NavLink></li>
                                    <li><NavLink to="">How it Works</NavLink></li>
                                    <li><NavLink to="">FAQs</NavLink></li>
                                    <li><NavLink to="">Difference</NavLink></li>
                                    <li><NavLink to="">Contact Us</NavLink></li>
                                    <li><NavLink to="">Team</NavLink></li>
                                    <li><NavLink to="">Support</NavLink></li>
                                    <li><NavLink to="">Roadmap</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className="footer-title">Social Media</h2>
                            <div className="social-links">
                                <ul>
                                    <li><NavLink to=""><i className="fa fa-twitter"></i> Twitter</NavLink></li>
                                    <li><NavLink to=""><i className="fa fa-linkedin"></i> Linkedin</NavLink></li>
                                    <li><NavLink to=""><i className="fa fa-telegram"></i> Telegram</NavLink></li>
                                    <li><NavLink to=""><i className="fa fa-medium"></i> Medium</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="copyright">
                                <p>Copyright © 2021. Blockchain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
